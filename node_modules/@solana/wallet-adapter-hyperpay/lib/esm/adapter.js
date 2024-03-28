import { BaseMessageSignerWalletAdapter, scopePollingDetectionStrategy, WalletAccountError, WalletConnectionError, WalletDisconnectedError, WalletNotConnectedError, WalletNotReadyError, WalletPublicKeyError, WalletReadyState, WalletSignMessageError, WalletSignTransactionError, } from '@solana/wallet-adapter-base';
import { PublicKey } from '@solana/web3.js';
export const HyperPayWalletName = 'HyperPay';
export class HyperPayWalletAdapter extends BaseMessageSignerWalletAdapter {
    constructor(config = {}) {
        super();
        this.name = HyperPayWalletName;
        this.url = 'https://hyperpay.io';
        this.icon = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTIwcHgiIGhlaWdodD0iNTIwcHgiIHZpZXdCb3g9IjAgMCA1MjAgNTIwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPHRpdGxlPkh5cGVyUGF5PC90aXRsZT4KICAgIDxnIGlkPSLpobXpnaItMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Iue8lue7hC0zMyIgZmlsbD0iIzFBNzJGRSIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgPHBhdGggZD0iTTI2MCwwIEM0MDMuNTIsMCA1MjAsMTE1Ljk0MTI1NSA1MjAsMjU5LjY1Mjg3IEM1MjAsNDAzLjM2NDQ4NiA0MDMuNTIsNTIwIDI2MCw1MjAgQzExNi40OCw1MjAgMCw0MDQuMDU4NzQ1IDAsMjYwLjM0NzEzIEMwLDExNi42MzU1MTQgMTE2LjQ4LDAgMjYwLDAgWiBNMTIzLjQ2Mzk4NSwxMjIuNjQ3NzM3IEwxMjMuNDEzMzMzLDEyMi42NDc1MyBMMTA2LjA4LDE4My42MjQ4MzMgTDIyMS44NjY2NjcsMTgzLjYyNDgzMyBMMjA4LDI0OC43NTk2OCBMMjc5LjQxMzMzMywyNDguNzU5NjggTDI3OS40MTMzMzMsMjQ4Ljc1OTY4IEwyNzkuNDEzODUzLDI0OC43MDU5NzggQzI3OS40MjM3MzMsMjQ4LjAxNDc4NiAyNzkuNjIxMzMzLDI0MC40NDQ1OTMgMjgzLjU3MzMzMywyMTQuMTEzNDg1IEMyODkuODEzMzMzLDE3MC40NTkyNzkgMzY1LjM4NjY2NywxNjcuNjg3NTgzIDM2NC42OTMzMzMsMjE2Ljg4NTE4IEMzNjQsMjUyLjkxNzIyMyAzMzYuMjY2NjY3LDI1Ny4wNzQ3NjYgMzE4LjI0LDI1Ny43Njc2OSBDMzEyLjQ3MTQ2NywyNTcuOTg5NDI2IDI4Ni4xODQ3MDQsMjU4LjA2OTI1MSAyNTMuMTAyMDc3LDI1OC4wNzUyODIgTDI0My42Mjk3MDcsMjU4LjA3NTA4OSBDMTc0LjA4NzMzMywyNTguMDYwNDUxIDgxLjgxMzMzMzMsMjU3Ljc2NzY5IDgxLjgxMzMzMzMsMjU3Ljc2NzY5IEw4MS44MTMzMzMzLDI1Ny43Njc2OSBMNjEuNzA2NjY2NywzMTguMDUyMDY5IEwxODcuMiwzMTguMDUyMDY5IEwxNjguNDgsMzkxLjUwMjAwMyBMMjQ4LjkwNjY2NywzOTEuNTAyMDAzIEwyNjguMzIsMzE2LjY2NjIyMiBDMjY4LjMyLDMxNi42NjYyMjIgMjgzLjc5NTIsMzE2LjQxNjc2OSAyOTkuOTE5MzYsMzE2LjIxNzIwNyBMMzAyLjM0MDk5OCwzMTYuMTg3Njg0IEMzMTIuMzAxMzkyLDMxNi4wNjgxNTkgMzIyLjIyNjY2NywzMTUuOTczMjk4IDMyOC42NCwzMTUuOTczMjk4IEMzNTkuODQsMzE1Ljk3MzI5OCA0NDIuMzQ2NjY3LDI5NS44Nzg1MDUgNDQyLjM0NjY2NywyMDkuOTU1OTQxIEM0NDIuMzQ2NjY3LDEzMS42NTU1NDEgMzU3LjA2NjY2NywxMjMuMzQwNDU0IDMyNS4xNzMzMzMsMTIzLjM0MDQ1NCBDMjkzLjI4LDEyMy4zNDA0NTQgMTIzLjQxMzMzMywxMjIuNjQ3NTMgMTIzLjQxMzMzMywxMjIuNjQ3NTMgWiIgaWQ9IuW9oueKtue7k+WQiCI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+';
        this.supportedTransactionVersions = null;
        this._readyState = typeof window === 'undefined' || typeof document === 'undefined'
            ? WalletReadyState.Unsupported
            : WalletReadyState.NotDetected;
        this._disconnected = () => {
            const wallet = this._wallet;
            if (wallet) {
                wallet.off('disconnect', this._disconnected);
                this._wallet = null;
                this._publicKey = null;
                this.emit('error', new WalletDisconnectedError());
                this.emit('disconnect');
            }
        };
        this._connecting = false;
        this._wallet = null;
        this._publicKey = null;
        if (this._readyState !== WalletReadyState.Unsupported) {
            scopePollingDetectionStrategy(() => {
                if (window.hyperPay?.solana?.isHyperPay) {
                    this._readyState = WalletReadyState.Installed;
                    this.emit('readyStateChange', this._readyState);
                    return true;
                }
                return false;
            });
        }
    }
    get publicKey() {
        return this._publicKey;
    }
    get connecting() {
        return this._connecting;
    }
    get connected() {
        return !!this._wallet?.isConnected;
    }
    get readyState() {
        return this._readyState;
    }
    async connect() {
        try {
            if (this.connected || this.connecting)
                return;
            if (this._readyState !== WalletReadyState.Installed)
                throw new WalletNotReadyError();
            this._connecting = true;
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            const wallet = window.hyperPay.solana;
            try {
                await wallet.connect();
            }
            catch (error) {
                throw new WalletConnectionError(error?.message, error);
            }
            if (!wallet.publicKey)
                throw new WalletAccountError();
            let publicKey;
            try {
                publicKey = new PublicKey(wallet.publicKey.toBytes());
            }
            catch (error) {
                throw new WalletPublicKeyError(error?.message, error);
            }
            wallet.on('disconnect', this._disconnected);
            this._wallet = wallet;
            this._publicKey = publicKey;
            this.emit('connect', publicKey);
        }
        catch (error) {
            this.emit('error', error);
            throw error;
        }
        finally {
            this._connecting = false;
        }
    }
    async disconnect() {
        const wallet = this._wallet;
        if (wallet) {
            wallet.off('disconnect', this._disconnected);
            this._wallet = null;
            this._publicKey = null;
            this.emit('disconnect');
        }
    }
    async signTransaction(transaction) {
        try {
            const wallet = this._wallet;
            if (!wallet)
                throw new WalletNotConnectedError();
            try {
                return (await wallet.signTransaction(transaction)) || transaction;
            }
            catch (error) {
                throw new WalletSignTransactionError(error?.message, error);
            }
        }
        catch (error) {
            this.emit('error', error);
            throw error;
        }
    }
    async signAllTransactions(transactions) {
        try {
            const wallet = this._wallet;
            if (!wallet)
                throw new WalletNotConnectedError();
            try {
                return (await wallet.signAllTransactions(transactions)) || transactions;
            }
            catch (error) {
                throw new WalletSignTransactionError(error?.message, error);
            }
        }
        catch (error) {
            this.emit('error', error);
            throw error;
        }
    }
    async signMessage(message) {
        try {
            const wallet = this._wallet;
            if (!wallet)
                throw new WalletNotConnectedError();
            try {
                const { signature } = await wallet.signMessage(message);
                return signature;
            }
            catch (error) {
                throw new WalletSignMessageError(error?.message, error);
            }
        }
        catch (error) {
            this.emit('error', error);
            throw error;
        }
    }
}
//# sourceMappingURL=adapter.js.map