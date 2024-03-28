
import {
    Blockhash, Connection, Message,
    PublicKey,
    SIGNATURE_LENGTH_IN_BYTES, Signer, Transaction,
    TransactionInstruction,
    TransactionSignature
} from "@solana/web3.js";
import bs58 from "bs58";
import {v4 as uuidv4} from "uuid";
import { EventEmitter } from "eventemitter3";


interface Connected {
    publicKey: PublicKey;
}

interface SendTransaction {
    identifier: string;
    signature: TransactionSignature;
}

interface SerializableSignaturePubkeyPair {
    signature: string;
    pubkey: string;
}

interface SignTransaction {
    identifier: string;
    signatures: SerializableSignaturePubkeyPair[];
    feePayer: string;
    recentBlockhash: Blockhash;
    message: string;
}

interface StrikeWalletMessage {
    type: 'connected' | 'sendTransaction' | 'signTransaction';
    error?: string;
    connected?: Connected;
    sendTransaction?: SendTransaction;
    signTransaction?: SignTransaction;
}

interface TransactionError {
    message: string
}

interface PendingTransactions {
    [hash: string]: SendTransaction | SignTransaction | null
}

interface PendingTransactionErrors {
    [hash: string]: TransactionError | null
}

interface SerializableInstruction {
    data: string,
    accountMetas: {address: string, signer: boolean, writable: boolean}[],
    programId: string
}

const DEFAULT_SIGNATURE_BUFFER = Buffer.alloc(SIGNATURE_LENGTH_IN_BYTES).fill(0)

export interface SignerOptions {
    signers?: Signer[];
}

export class StrikeWallet extends EventEmitter {
    isLoggedIn: boolean;
    url = 'https://wallet.strikeprotocols.com';
    private _pendingTransactions: PendingTransactions;
    private _pendingTransactionErrors: PendingTransactionErrors;
    private _timers: number[];
    private _wallet: Window | null;
    private _connecting: boolean;
    private _publicKey: PublicKey | null;

    constructor() {
        super()
        this.isLoggedIn = false
        this._pendingTransactions = {}
        this._pendingTransactionErrors = {}
        this._timers = []
        this._wallet = null;
        this._connecting = false
        this._publicKey = null

        window.addEventListener("message", (e) => {
            this.handleWalletMessage(e.data as StrikeWalletMessage)
        })
    }

    async connect(url: string | null): Promise<PublicKey> {
        try {
            this.url = url || this.url
            const origin = encodeURIComponent(window.location.origin);
            const connectUrl = `${this.url}/connect?origin=${origin}`;
            this._connecting = true
            this._wallet = window.open(connectUrl, `strike-wallet-${origin}`, "height=900,width=800,menubar=no,status=no,toolbar=no");
            if (!this._wallet) {
                this._connecting = false
                throw new Error("Unable to connect to wallet")
            }
            this._timers.push(window.setInterval(() => {
                if (this._wallet!.closed) {
                    this.cleanUp();
                } else if (this._wallet) {
                    this._wallet.postMessage({type: 'heartbeat'}, this.url)
                }
            }, 100));
            return new Promise<PublicKey>((resolve, reject) => {
                const timer = window.setInterval(() => {
                    if (this.isLoggedIn && this._publicKey) {
                        this.clearTimer(timer);
                        resolve(this._publicKey!)
                    } else if (!this.isLoggedIn && !this._connecting) {
                        this.clearTimer(timer);
                        reject(new Error("Unable to connect to Strike"))
                    }
                }, 100);
                this._timers.push(timer)
            })
        } catch (error: any) {
            throw error;
        }
    }

    public cleanUp = () => {
        [...this._timers].forEach(t => this.clearTimer(t));
        const wallet = this._wallet;
        if (wallet) {
            wallet.close()
        }
        this._wallet = null
        this.emit('disconnected')
    }

    public async signTransaction(transaction: Transaction): Promise<Transaction> {
        this.verifyCanSignRequests([transaction])
        try {
            return this.signOneTransaction(transaction);
        } catch (error: any) {
            throw error;
        }
    }

    public async signAllTransactions(transactions: Transaction[]): Promise<Transaction[]> {
        this.verifyCanSignRequests(transactions)
        try {
            return this.signMultipleTransactions(transactions);
        } catch (error: any) {
            throw error;
        }
    }

    public async sendTransaction(
        transaction: Transaction,
        connection: Connection,
        options?: SignerOptions,
    ): Promise<TransactionSignature> {
        try {
            const wallet = this._wallet;
            if (!wallet) throw new Error("Not Connected");

            const transactionIdentifier = uuidv4()
            this._pendingTransactions[transactionIdentifier] = null;
            const signers = options ? options.signers : undefined;

            if (signers && signers!.length > 0) {
                return new Promise<TransactionSignature>((resolve, reject) => {
                    this.signOneTransaction(transaction, transactionIdentifier).then(walletTransaction => {
                        this._pendingTransactions[transactionIdentifier] = null
                        signers?.length && walletTransaction.partialSign(...signers);
                        wallet.postMessage({
                            type: "sendFinalTransaction", sendFinalTransaction: {
                                transactionIdentifier,
                                signaturePubkeyPairs: walletTransaction.signatures.filter(sp => sp.signature != null).map(sp => {
                                    return {
                                        'pubkey': sp.publicKey.toBase58(),
                                        'signature': sp.signature!.toString('base64')
                                    }
                                })
                            }
                        }, this.url);
                        const timer = window.setInterval(() => {
                            const pendingTransaction = this._pendingTransactions[transactionIdentifier] as SendTransaction
                            const pendingTransactionError = this._pendingTransactionErrors[transactionIdentifier]
                            if (pendingTransaction != null || pendingTransactionError != null) {
                                this.clearTimer(timer);
                                pendingTransaction && resolve(pendingTransaction.signature)
                                pendingTransactionError && reject(pendingTransactionError)
                            }
                        }, 100);
                        this._timers.push(timer)
                    }).catch((error) => {
                        reject(error)
                        throw error;
                    })
                })
            } else {
                const instructions = this.instructionsToSerializableInstructions(transaction.instructions)
                return new Promise<TransactionSignature>((resolve, reject) => {
                    wallet.postMessage({
                        type: "sendTransaction",
                        sendTransaction: { instructions, transactionIdentifier }
                    }, this.url);
                    const timer = window.setInterval(() => {
                        const pendingTransaction = this._pendingTransactions[transactionIdentifier] as SendTransaction
                        const pendingTransactionError = this._pendingTransactionErrors[transactionIdentifier]
                        if (pendingTransaction != null || pendingTransactionError != null) {
                            this.clearTimer(timer);
                            pendingTransaction && resolve(pendingTransaction.signature)
                            pendingTransactionError && reject(pendingTransactionError)
                        }
                    }, 100);
                    this._timers.push(timer)
                })
            }
        } catch (error) {
            throw error;
        }
    }


    private clearTimer = (timer: number) => {
        this._timers = this._timers.filter(t => t != timer)
        window.clearInterval(timer);
    }

    private instructionsToSerializableInstructions = (instructions: TransactionInstruction[]): SerializableInstruction[] => instructions.map(i => {
        return {
            'programId': i.programId.toBase58(),
            'accountMetas': i.keys.map(k => {
                return {
                    address: k.pubkey.toBase58(),
                    signer: k.isSigner,
                    writable: k.isWritable,
                }
            }),
            'data': window.btoa(String.fromCharCode(...i.data)),
        }
    })

    private buildTransaction(pendingTransaction: SignTransaction): Transaction {
        let message = Message.from(Buffer.from(Uint8Array.from(window.atob(pendingTransaction.message!), c => c.charCodeAt(0))))
        return Transaction.populate(
            message,
            Array.from({length: message.header.numRequiredSignatures}, (_v, i) => {
                let sigPubkeyPair = pendingTransaction.signatures.find(s => s.pubkey == message.accountKeys[i].toBase58())
                return bs58.encode(sigPubkeyPair
                    ? Buffer.from(Uint8Array.from(window.atob(sigPubkeyPair.signature), c => c.charCodeAt(0)))
                    : DEFAULT_SIGNATURE_BUFFER
                )
            })
        )
    }

    private verifyCanSignRequests(transactions: Transaction[]) {
        transactions.forEach(transaction => {
            if (transaction.signatures.some(s => s.signature != null)) {
                throw new Error("Strike does not support this signing mode")
            }
        })
    }

    private signOneTransaction(transaction: Transaction, transactionIdentifier = uuidv4()): Promise<Transaction> {
        const wallet = this._wallet;
        if (!wallet) throw new Error("Not Connected");

        const instructions = this.instructionsToSerializableInstructions(transaction.instructions)
        this._pendingTransactions[transactionIdentifier] = null;
        return new Promise<Transaction>((resolve, reject) => {
            wallet.postMessage({type: "signTransaction", signTransaction: { instructions, transactionIdentifier }}, this.url);
            const timer = window.setInterval(() => {
                const pendingTransaction = this._pendingTransactions[transactionIdentifier] as SignTransaction
                const pendingTransactionError = this._pendingTransactionErrors[transactionIdentifier]
                if (pendingTransaction != null || pendingTransactionError != null) {
                    this.clearTimer(timer)
                    pendingTransaction && resolve(this.buildTransaction(pendingTransaction))
                    pendingTransactionError &&  reject(pendingTransactionError)
                }
            }, 100);
            this._timers.push(timer)
        });
    }

    private signMultipleTransactions(transactions: Transaction[]): Promise<Transaction[]> {
        const wallet = this._wallet;
        if (!wallet) throw new Error("Not Connected");

        const serializedTransactions = transactions.map((t) => {
            return {
                instructions: this.instructionsToSerializableInstructions(t.instructions),
                transactionIdentifier: uuidv4()
            }
        })
        const transactionIdentifiers = serializedTransactions.map((t) => t.transactionIdentifier)
        transactionIdentifiers.forEach((transactionIdentifier) => this._pendingTransactions[transactionIdentifier] = null)
        return new Promise<Transaction[]>((resolve, reject) => {
            wallet.postMessage({type: "signAllTransactions", signAllTransactions: {transactions: serializedTransactions}}, this.url);
            const timer = window.setInterval(() => {
                const pendingTransactions = transactionIdentifiers.map((txId) => this._pendingTransactions[txId] as SignTransaction)
                const pendingTransactionErrors = transactionIdentifiers.map((txId) => this._pendingTransactionErrors[txId])
                if (pendingTransactions.every((t) => t != null)) {
                    this.clearTimer(timer)
                    resolve(pendingTransactions.map((pt) => this.buildTransaction(pt)))
                } else if (pendingTransactionErrors.some((e) => e != null)) {
                    this.clearTimer(timer)
                    reject(pendingTransactionErrors.find((e) => e != null))
                }
            }, 100);
            this._timers.push(timer)
        });
    }

    private handleWalletMessage = (data: StrikeWalletMessage) => {
        if (data.type == "connected") {
            this._connecting = false;
            if (!data.error) {
                this.isLoggedIn = true;
                if (data.connected?.publicKey) {
                    this._publicKey = new PublicKey(data.connected.publicKey);
                }
            }
        } else if (["sendTransaction", "sendFinalTransaction"].includes(data.type)) {
            const transactionIdentifier = data.sendTransaction?.identifier
            if (transactionIdentifier && transactionIdentifier in this._pendingTransactions) {
                if (data.error) {
                    this._pendingTransactionErrors[transactionIdentifier] = {message: data.error};
                } else {
                    this._pendingTransactions[transactionIdentifier] = data.sendTransaction || null
                }
            }
        } else if (data.type == "signTransaction") {
            const transactionIdentifier = data.signTransaction?.identifier
            if (transactionIdentifier && transactionIdentifier in this._pendingTransactions) {
                if (data.error) {
                    this._pendingTransactionErrors[transactionIdentifier] = {message: data.error}
                } else {
                    this._pendingTransactions[transactionIdentifier] = data.signTransaction || null
                }
            }
        }
    }
}
