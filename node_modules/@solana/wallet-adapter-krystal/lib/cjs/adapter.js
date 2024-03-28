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
exports.KrystalWalletAdapter = exports.KrystalWalletName = void 0;
const wallet_adapter_base_1 = require("@solana/wallet-adapter-base");
const web3_js_1 = require("@solana/web3.js");
exports.KrystalWalletName = 'Krystal';
class KrystalWalletAdapter extends wallet_adapter_base_1.BaseMessageSignerWalletAdapter {
    constructor(config = {}) {
        super();
        this.name = exports.KrystalWalletName;
        this.url = 'https://krystal.app';
        this.icon = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiBmaWxsPSIjMDEwMTAxIi8+CjxyZWN0IHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiByeD0iMTAwIiBmaWxsPSIjMDEwMTAxIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjkxLjg4NyA4MC44NDA3QzI5MS44ODcgNzUuMDgyNiAyOTcuNTg1IDcxLjA1NzYgMzAzLjAxMiA3Mi45ODJMMzc3LjYxOCA5OS40Mzc2QzM4My4wMyAxMDEuMzU3IDM4NC45MjggMTA4LjA0MyAzODEuMzMxIDExMi41MTlMMzA2LjcyNSAyMDUuMzcyQzMwMS43OTQgMjExLjUxIDI5MS44ODcgMjA4LjAyMyAyOTEuODg3IDIwMC4xNVY4MC44NDA3Wk0xNTIuMzUzIDE3Mi4zM0MxNDYuMjg1IDE3NS44NDYgMTQ3LjAwNiAxODQuODI4IDE1My41NTcgMTg3LjMzM0wyNjYuMTEyIDIzMC4zNTNDMjcxLjU3MSAyMzIuNDQgMjc3LjQyNyAyMjguNDA5IDI3Ny40MjcgMjIyLjU2NVYxMTQuMzE5QzI3Ny40MjcgMTA3Ljg5NSAyNzAuNDY3IDEwMy44ODQgMjY0LjkwOCAxMDcuMTA1TDE1Mi4zNTMgMTcyLjMzWk03Mi41MjcyIDI5MC40NzJDNzIuMDY0MSAyOTYuMTg5IDc3LjM3NzUgMzAwLjY1NSA4Mi45Mjk3IDI5OS4yMTdMMjQ5LjkwNyAyNTUuOTQ1QzI1Ny43NjkgMjUzLjkwOCAyNTguMzc1IDI0Mi45NzcgMjUwLjc4NyAyNDAuMDgzTDkyLjIxMiAxNzkuNjEzQzg3LjAxOTEgMTc3LjYzMyA4MS4zNzg5IDE4MS4xOTEgODAuOTMwMiAxODYuNzNMNzIuNTI3MiAyOTAuNDcyWk0yNDkuOTA4IDI4Ni45M0MyNTIuMTQ2IDI4MC42MjcgMjQ2LjQyNCAyNzQuMzg3IDIzOS45NSAyNzYuMDcyTDEyNy42NDkgMzA1LjMwMkMxMjEuMzU3IDMwNi45MzkgMTE5LjI3NyAzMTQuODI5IDEyMy45NDQgMzE5LjM1NkwxOTkuNzYgMzkyLjkwNEMyMDQuMTE5IDM5Ny4xMzIgMjExLjM5MiAzOTUuNDMyIDIxMy40MjQgMzg5LjcwOEwyNDkuOTA4IDI4Ni45M1pNMzExLjk0MyAyNDQuMTQ3QzMwNS44MzEgMjQyLjg5NiAzMDMuMjA4IDIzNS42MjMgMzA3LjExNCAyMzAuNzU4TDM4NS43MDMgMTMyLjg4MkMzOTAuMTMyIDEyNy4zNjUgMzk4Ljk4NyAxMjkuNTI1IDQwMC4zNzkgMTM2LjQ2MUw0MjQuMjI5IDI1NS4zMTJDNDI1LjQwMyAyNjEuMTY0IDQyMC4yMjggMjY2LjMxOCA0MTQuMzgxIDI2NS4xMjFMMzExLjk0MyAyNDQuMTQ3Wk0zMjEuMjA0IDI2NC4wNjhDMzEzLjI5MSAyNjIuNDQyIDMwNy45MjEgMjcxLjg5MiAzMTMuMzY4IDI3Ny44NThMNDE1Ljc3OSAzOTAuMDMxQzQyMC41NDMgMzk1LjI0OSA0MjkuMjMxIDM5Mi41NDggNDMwLjE5NyAzODUuNTQ5TDQ0Mi40MjIgMjk2LjkzMkM0NDMuMDIyIDI5Mi41OCA0NDAuMTQzIDI4OC41MDkgNDM1Ljg0IDI4Ny42MjVMMzIxLjIwNCAyNjQuMDY4Wk0yNzYuMjQ3IDMwMi44MDhDMjc2LjA3NSAyOTMuNTM3IDI2My4xNzEgMjkxLjQyOCAyNjAuMDU2IDMwMC4xNjFMMjE1LjA1MiA0MjYuMzYyQzIxMi44NzUgNDMyLjQ2NSAyMTguMTg4IDQzOC42MTEgMjI0LjU0MyA0MzcuMzM4TDI3MS43MDcgNDI3Ljg5M0MyNzUuNjYgNDI3LjEwMiAyNzguNDgxIDQyMy41OTUgMjc4LjQwNiA0MTkuNTYzTDI3Ni4yNDcgMzAyLjgwOFpNMjkyLjI5NiAzMDQuMDM2QzI5Mi4xNTMgMjk2LjM2OSAzMDEuNTYzIDI5Mi41OTEgMzA2Ljc2MiAyOTguMjI4TDM4MS43NjUgMzc5LjU2QzM4Ni4yMTggMzg0LjM4OCAzODMuNTk5IDM5Mi4yMyAzNzcuMTM5IDM5My40MTRMMzAzLjkgNDA2LjgzM0MyOTguODQxIDQwNy43NiAyOTQuMTU3IDQwMy45MyAyOTQuMDYxIDM5OC43ODdMMjkyLjI5NiAzMDQuMDM2WiIgZmlsbD0iIzFERTlCNiIvPgo8L3N2Zz4K';
        this.supportedTransactionVersions = null;
        this._readyState = typeof window === 'undefined' || typeof document === 'undefined'
            ? wallet_adapter_base_1.WalletReadyState.Unsupported
            : wallet_adapter_base_1.WalletReadyState.NotDetected;
        this._connecting = false;
        this._wallet = null;
        this._publicKey = null;
        if (this._readyState !== wallet_adapter_base_1.WalletReadyState.Unsupported) {
            (0, wallet_adapter_base_1.scopePollingDetectionStrategy)(() => {
                var _a;
                if ((_a = window.krystal) === null || _a === void 0 ? void 0 : _a.solana) {
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
        return !!((_a = this._wallet) === null || _a === void 0 ? void 0 : _a.isConnected());
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
                const wallet = window.krystal.solana;
                let account;
                try {
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                    account = (yield wallet.connect())[0];
                }
                catch (error) {
                    throw new wallet_adapter_base_1.WalletAccountError(error === null || error === void 0 ? void 0 : error.message, error);
                }
                let publicKey;
                try {
                    publicKey = new web3_js_1.PublicKey(account);
                }
                catch (error) {
                    throw new wallet_adapter_base_1.WalletPublicKeyError(error === null || error === void 0 ? void 0 : error.message, error);
                }
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
                this._wallet = null;
                this._publicKey = null;
                try {
                    yield wallet.disconnect();
                }
                catch (error) {
                    this.emit('error', new wallet_adapter_base_1.WalletDisconnectionError(error === null || error === void 0 ? void 0 : error.message, error));
                }
            }
            this.emit('disconnect');
        });
    }
    signTransaction(transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const wallet = this._wallet;
                if (!wallet)
                    throw new wallet_adapter_base_1.WalletNotConnectedError();
                try {
                    return (yield wallet.signTransaction(transaction));
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
                    return (yield wallet.signAllTransactions(transactions));
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
exports.KrystalWalletAdapter = KrystalWalletAdapter;
//# sourceMappingURL=adapter.js.map