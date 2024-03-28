/// <reference types="node" />
import type { WalletName } from '@solana/wallet-adapter-base';
import { BaseSignerWalletAdapter, WalletReadyState } from '@solana/wallet-adapter-base';
import type { PublicKey, Transaction } from '@solana/web3.js';
import './polyfills/index.js';
export interface LedgerWalletAdapterConfig {
    derivationPath?: Buffer;
}
export declare const LedgerWalletName: WalletName<"Ledger">;
export declare class LedgerWalletAdapter extends BaseSignerWalletAdapter {
    name: WalletName<"Ledger">;
    url: string;
    icon: string;
    readonly supportedTransactionVersions: null;
    private _derivationPath;
    private _connecting;
    private _transport;
    private _publicKey;
    private _readyState;
    constructor(config?: LedgerWalletAdapterConfig);
    get publicKey(): PublicKey | null;
    get connecting(): boolean;
    get readyState(): WalletReadyState;
    connect(): Promise<void>;
    disconnect(): Promise<void>;
    signTransaction<T extends Transaction>(transaction: T): Promise<T>;
    private _disconnected;
}
//# sourceMappingURL=adapter.d.ts.map