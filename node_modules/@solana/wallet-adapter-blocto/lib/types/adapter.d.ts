import type { SendTransactionOptions, WalletName } from '@solana/wallet-adapter-base';
import { BaseWalletAdapter, WalletAdapterNetwork, WalletReadyState } from '@solana/wallet-adapter-base';
import type { Connection, Transaction, TransactionSignature } from '@solana/web3.js';
import { PublicKey } from '@solana/web3.js';
export interface BloctoWalletAdapterConfig {
    network?: WalletAdapterNetwork;
}
export declare const BloctoWalletName: WalletName<"Blocto">;
export declare class BloctoWalletAdapter extends BaseWalletAdapter {
    name: WalletName<"Blocto">;
    url: string;
    icon: string;
    readonly supportedTransactionVersions: null;
    private _connecting;
    private _wallet;
    private _publicKey;
    private _network;
    private _readyState;
    constructor(config?: BloctoWalletAdapterConfig);
    get publicKey(): PublicKey | null;
    get connecting(): boolean;
    get readyState(): WalletReadyState;
    connect(): Promise<void>;
    disconnect(): Promise<void>;
    sendTransaction(transaction: Transaction, connection: Connection, options?: SendTransactionOptions): Promise<TransactionSignature>;
}
//# sourceMappingURL=adapter.d.ts.map