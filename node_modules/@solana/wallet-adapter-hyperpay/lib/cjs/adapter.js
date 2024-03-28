"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HyperPayWalletAdapter = exports.HyperPayWalletName = void 0;
const wallet_adapter_base_1 = require("@solana/wallet-adapter-base");
const web3_js_1 = require("@solana/web3.js");
exports.HyperPayWalletName = 'HyperPay';
class HyperPayWalletAdapter extends wallet_adapter_base_1.BaseMessageSignerWalletAdapter {
    constructor(config = {}) {
        super();
        this.name = exports.HyperPayWalletName;
        this.url = 'https://hyperpay.io';
        this.icon = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTIwcHgiIGhlaWdodD0iNTIwcHgiIHZpZXdCb3g9IjAgMCA1MjAgNTIwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPHRpdGxlPkh5cGVyUGF5PC90aXRsZT4KICAgIDxnIGlkPSLpobXpnaItMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Iue8lue7hC0zMyIgZmlsbD0iIzFBNzJGRSIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgPHBhdGggZD0iTTI2MCwwIEM0MDMuNTIsMCA1MjAsMTE1Ljk0MTI1NSA1MjAsMjU5LjY1Mjg3IEM1MjAsNDAzLjM2NDQ4NiA0MDMuNTIsNTIwIDI2MCw1MjAgQzExNi40OCw1MjAgMCw0MDQuMDU4NzQ1IDAsMjYwLjM0NzEzIEMwLDExNi42MzU1MTQgMTE2LjQ4LDAgMjYwLDAgWiBNMTIzLjQ2Mzk4NSwxMjIuNjQ3NzM3IEwxMjMuNDEzMzMzLDEyMi42NDc1MyBMMTA2LjA4LDE4My42MjQ4MzMgTDIyMS44NjY2NjcsMTgzLjYyNDgzMyBMMjA4LDI0OC43NTk2OCBMMjc5LjQxMzMzMywyNDguNzU5NjggTDI3OS40MTMzMzMsMjQ4Ljc1OTY4IEwyNzkuNDEzODUzLDI0OC43MDU5NzggQzI3OS40MjM3MzMsMjQ4LjAxNDc4NiAyNzkuNjIxMzMzLDI0MC40NDQ1OTMgMjgzLjU3MzMzMywyMTQuMTEzNDg1IEMyODkuODEzMzMzLDE3MC40NTkyNzkgMzY1LjM4NjY2NywxNjcuNjg3NTgzIDM2NC42OTMzMzMsMjE2Ljg4NTE4IEMzNjQsMjUyLjkxNzIyMyAzMzYuMjY2NjY3LDI1Ny4wNzQ3NjYgMzE4LjI0LDI1Ny43Njc2OSBDMzEyLjQ3MTQ2NywyNTcuOTg5NDI2IDI4Ni4xODQ3MDQsMjU4LjA2OTI1MSAyNTMuMTAyMDc3LDI1OC4wNzUyODIgTDI0My42Mjk3MDcsMjU4LjA3NTA4OSBDMTc0LjA4NzMzMywyNTguMDYwNDUxIDgxLjgxMzMzMzMsMjU3Ljc2NzY5IDgxLjgxMzMzMzMsMjU3Ljc2NzY5IEw4MS44MTMzMzMzLDI1Ny43Njc2OSBMNjEuNzA2NjY2NywzMTguMDUyMDY5IEwxODcuMiwzMTguMDUyMDY5IEwxNjguNDgsMzkxLjUwMjAwMyBMMjQ4LjkwNjY2NywzOTEuNTAyMDAzIEwyNjguMzIsMzE2LjY2NjIyMiBDMjY4LjMyLDMxNi42NjYyMjIgMjgzLjc5NTIsMzE2LjQxNjc2OSAyOTkuOTE5MzYsMzE2LjIxNzIwNyBMMzAyLjM0MDk5OCwzMTYuMTg3Njg0IEMzMTIuMzAxMzkyLDMxNi4wNjgxNTkgMzIyLjIyNjY2NywzMTUuOTczMjk4IDMyOC42NCwzMTUuOTczMjk4IEMzNTkuODQsMzE1Ljk3MzI5OCA0NDIuMzQ2NjY3LDI5NS44Nzg1MDUgNDQyLjM0NjY2NywyMDkuOTU1OTQxIEM0NDIuMzQ2NjY3LDEzMS42NTU1NDEgMzU3LjA2NjY2NywxMjMuMzQwNDU0IDMyNS4xNzMzMzMsMTIzLjM0MDQ1NCBDMjkzLjI4LDEyMy4zNDA0NTQgMTIzLjQxMzMzMywxMjIuNjQ3NTMgMTIzLjQxMzMzMywxMjIuNjQ3NTMgWiIgaWQ9IuW9oueKtue7k+WQiCI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+';
        this.supportedTransactionVersions = null;
        this._readyState = typeof window === 'undefined' || typeof document === 'undefined'
            ? wallet_adapter_base_1.WalletReadyState.Unsupported
            : wallet_adapter_base_1.WalletReadyState.NotDetected;
        this._disconnected = () => {
            const wallet = this._wallet;
            if (wallet) {
                wallet.off('disconnect', this._disconnected);
                this._wallet = null;
                this._publicKey = null;
                this.emit('error', new wallet_adapter_base_1.WalletDisconnectedError());
                this.emit('disconnect');
            }
        };
        this._connecting = false;
        this._wallet = null;
        this._publicKey = null;
        if (this._readyState !== wallet_adapter_base_1.WalletReadyState.Unsupported) {
            (0, wallet_adapter_base_1.scopePollingDetectionStrategy)(() => {
                var _a, _b;
                if ((_b = (_a = window.hyperPay) === null || _a === void 0 ? void 0 : _a.solana) === null || _b === void 0 ? void 0 : _b.isHyperPay) {
                    this._readyState = wallet_adapter_base_1.WalletReadyState.Installed;
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
        var _a;
        return !!((_a = this._wallet) === null || _a === void 0 ? void 0 : _a.isConnected);
    }
    get readyState() {
        return this._readyState;
    }
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (this.connected || this.connecting)
                    return;
                if (this._readyState !== wallet_adapter_base_1.WalletReadyState.Installed)
                    throw new wallet_adapter_base_1.WalletNotReadyError();
                this._connecting = true;
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                const wallet = window.hyperPay.solana;
                try {
                    yield wallet.connect();
                }
                catch (error) {
                    throw new wallet_adapter_base_1.WalletConnectionError(error === null || error === void 0 ? void 0 : error.message, error);
                }
                if (!wallet.publicKey)
                    throw new wallet_adapter_base_1.WalletAccountError();
                let publicKey;
                try {
                    publicKey = new web3_js_1.PublicKey(wallet.publicKey.toBytes());
                }
                catch (error) {
                    throw new wallet_adapter_base_1.WalletPublicKeyError(error === null || error === void 0 ? void 0 : error.message, error);
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
        });
    }
    disconnect() {
        return __awaiter(this, void 0, void 0, function* () {
            const wallet = this._wallet;
            if (wallet) {
                wallet.off('disconnect', this._disconnected);
                this._wallet = null;
                this._publicKey = null;
                this.emit('disconnect');
            }
        });
    }
    signTransaction(transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const wallet = this._wallet;
                if (!wallet)
                    throw new wallet_adapter_base_1.WalletNotConnectedError();
                try {
                    return (yield wallet.signTransaction(transaction)) || transaction;
                }
                catch (error) {
                    throw new wallet_adapter_base_1.WalletSignTransactionError(error === null || error === void 0 ? void 0 : error.message, error);
                }
            }
            catch (error) {
                this.emit('error', error);
                throw error;
            }
        });
    }
    signAllTransactions(transactions) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const wallet = this._wallet;
                if (!wallet)
                    throw new wallet_adapter_base_1.WalletNotConnectedError();
                try {
                    return (yield wallet.signAllTransactions(transactions)) || transactions;
                }
                catch (error) {
                    throw new wallet_adapter_base_1.WalletSignTransactionError(error === null || error === void 0 ? void 0 : error.message, error);
                }
            }
            catch (error) {
                this.emit('error', error);
                throw error;
            }
        });
    }
    signMessage(message) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const wallet = this._wallet;
                if (!wallet)
                    throw new wallet_adapter_base_1.WalletNotConnectedError();
                try {
                    const { signature } = yield wallet.signMessage(message);
                    return signature;
                }
                catch (error) {
                    throw new wallet_adapter_base_1.WalletSignMessageError(error === null || error === void 0 ? void 0 : error.message, error);
                }
            }
            catch (error) {
                this.emit('error', error);
                throw error;
            }
        });
    }
}
exports.HyperPayWalletAdapter = HyperPayWalletAdapter;
//# sourceMappingURL=adapter.js.map