import type { WalletConnectWalletAdapterConfig as BaseWalletConnectWalletAdapterConfig } from '@jnwng/walletconnect-solana';
import type { WalletName } from '@solana/wallet-adapter-base';
import { BaseSignerWalletAdapter, WalletAdapterNetwork, WalletReadyState } from '@solana/wallet-adapter-base';
import type { PublicKey, Transaction } from '@solana/web3.js';
export declare const WalletConnectWalletName: WalletName<"WalletConnect">;
export declare type WalletConnectWalletAdapterConfig = {
    network: WalletAdapterNetwork.Mainnet | WalletAdapterNetwork.Devnet;
} & Pick<BaseWalletConnectWalletAdapterConfig, 'options'>;
export declare class WalletConnectWalletAdapter extends BaseSignerWalletAdapter {
    name: WalletName<"WalletConnect">;
    url: string;
    icon: string;
    readonly supportedTransactionVersions: null;
    private _publicKey;
    private _connecting;
    private _wallet;
    private _config;
    private _readyState;
    constructor(config: WalletConnectWalletAdapterConfig);
    get publicKey(): PublicKey | null;
    get connecting(): boolean;
    get readyState(): WalletReadyState;
    connect(): Promise<void>;
    disconnect(): Promise<void>;
    signTransaction<T extends Transaction>(transaction: T): Promise<T>;
    signMessage(message: Uint8Array): Promise<Uint8Array>;
    private _disconnected;
}
//# sourceMappingURL=adapter.d.ts.map