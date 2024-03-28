import type { WalletName } from '@solana/wallet-adapter-base';
import { BaseSignerWalletAdapter, WalletReadyState } from '@solana/wallet-adapter-base';
import type { Transaction } from '@solana/web3.js';
import { PublicKey } from '@solana/web3.js';
export interface SafePalWalletAdapterConfig {
}
export declare const SafePalWalletName: WalletName<"SafePal">;
export declare class SafePalWalletAdapter extends BaseSignerWalletAdapter {
    name: WalletName<"SafePal">;
    url: string;
    icon: string;
    readonly supportedTransactionVersions: null;
    private _connecting;
    private _wallet;
    private _publicKey;
    private _readyState;
    constructor(config?: SafePalWalletAdapterConfig);
    get publicKey(): PublicKey | null;
    get connecting(): boolean;
    get readyState(): WalletReadyState;
    connect(): Promise<void>;
    disconnect(): Promise<void>;
    signTransaction<T extends Transaction>(transaction: T): Promise<T>;
    signAllTransactions<T extends Transaction>(transactions: T[]): Promise<T[]>;
}
//# sourceMappingURL=adapter.d.ts.map