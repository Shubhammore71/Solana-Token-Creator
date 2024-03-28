import type { WalletName } from '@solana/wallet-adapter-base';
import { BaseMessageSignerWalletAdapter, WalletReadyState } from '@solana/wallet-adapter-base';
import type { Transaction } from '@solana/web3.js';
import { PublicKey } from '@solana/web3.js';
export interface KeystoneWalletAdapterConfig {
}
export declare const KeystoneWalletName: WalletName<"Keystone">;
export declare class KeystoneWalletAdapter extends BaseMessageSignerWalletAdapter {
    name: WalletName<"Keystone">;
    url: string;
    icon: string;
    readonly supportedTransactionVersions: null;
    private _keyring;
    private _publicKey;
    private _connecting;
    private _readyState;
    get publicKey(): PublicKey | null;
    get connecting(): boolean;
    get readyState(): WalletReadyState;
    constructor(config?: KeystoneWalletAdapterConfig);
    connect(): Promise<void>;
    disconnect(): Promise<void>;
    signTransaction<T extends Transaction>(transaction: T): Promise<T>;
    signMessage(message: Uint8Array): Promise<Uint8Array>;
}
//# sourceMappingURL=adapter.d.ts.map