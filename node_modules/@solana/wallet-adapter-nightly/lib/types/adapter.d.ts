import type { WalletName } from '@solana/wallet-adapter-base';
import { BaseMessageSignerWalletAdapter, WalletReadyState } from '@solana/wallet-adapter-base';
import type { Transaction } from '@solana/web3.js';
import { PublicKey } from '@solana/web3.js';
export declare const NightlyWalletName: WalletName<"Nightly">;
export declare class NightlyWalletAdapter extends BaseMessageSignerWalletAdapter {
    name: WalletName<"Nightly">;
    url: string;
    icon: string;
    readonly supportedTransactionVersions: null;
    private _connecting;
    private _publicKey;
    private _wallet;
    private _readyState;
    constructor();
    get connecting(): boolean;
    get readyState(): WalletReadyState;
    get publicKey(): PublicKey | null;
    connect(): Promise<void>;
    disconnect(): Promise<void>;
    signTransaction<T extends Transaction>(transaction: T): Promise<T>;
    signAllTransactions<T extends Transaction>(transactions: T[]): Promise<T[]>;
    signMessage(message: Uint8Array): Promise<Uint8Array>;
}
//# sourceMappingURL=adapter.d.ts.map