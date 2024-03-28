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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvanaWalletAdapter = exports.AvanaWalletName = void 0;
const wallet_adapter_base_1 = require("@solana/wallet-adapter-base");
const web3_js_1 = require("@solana/web3.js");
exports.AvanaWalletName = 'Avana';
class AvanaWalletAdapter extends wallet_adapter_base_1.BaseMessageSignerWalletAdapter {
    constructor(config = {}) {
        super();
        this.name = exports.AvanaWalletName;
        this.url = 'https://www.avanawallet.com';
        this.icon = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNi4yLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAyODkuNzg3ODEgMjg5Ljc4NzgxIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyODkuNzg3ODEgMjg5Ljc4NzgxIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIGZpbGw9IiMxQzFDMUMiIGQ9Ik0yMTguNDM5MDEsMjg5Ljc4NzgxSDcxLjM0ODhDMzEuOTQzOTUsMjg5Ljc4NzgxLDAsMjU3Ljg0Mzg3LDAsMjE4LjQzOTAxVjcxLjM0ODgNCglDMCwzMS45NDM5NSwzMS45NDM5NSwwLDcxLjM0ODgsMGgxNDcuMDkwMjFjMzkuNDA0ODYsMCw3MS4zNDg4LDMxLjk0Mzk1LDcxLjM0ODgsNzEuMzQ4OHYxNDcuMDkwMjENCglDMjg5Ljc4NzgxLDI1Ny44NDM4NywyNTcuODQzODcsMjg5Ljc4NzgxLDIxOC40MzkwMSwyODkuNzg3ODF6Ii8+DQo8bGluZWFyR3JhZGllbnQgaWQ9IlNWR0lEXzFfIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjczLjU4NTUzIiB5MT0iMjE3Ljk4MDgzIiB4Mj0iMjA4LjY0NzQ5IiB5Mj0iLTY0LjU5NzU2IiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDAgMjkwLjc5MzAzKSI+DQoJPHN0b3AgIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6IzE2RkVBOCIvPg0KCTxzdG9wICBvZmZzZXQ9IjAuNCIgc3R5bGU9InN0b3AtY29sb3I6IzAwREFGRiIvPg0KCTxzdG9wICBvZmZzZXQ9IjAuOTIiIHN0eWxlPSJzdG9wLWNvbG9yOiNEQzFGRkYiLz4NCgk8c3RvcCAgb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojREMxRkZGIi8+DQo8L2xpbmVhckdyYWRpZW50Pg0KPHBhdGggZmlsbD0idXJsKCNTVkdJRF8xXykiIGQ9Ik0yMzUuNzgxMjIsMjE3LjA0NTMzTDE1Ny43MjQ0Myw0OC40NTUyMmMtNS4wMzU4MS0xMC45MjA1NC0yMC41Mzk3Ni0xMC45MjA1NC0yNS41NzU1OSwwDQoJbC0zOS4xODM4OSw4NC41OTIxNGMtMS4xMDM0MiwyLjQwNDcyLTEuNjQwOTcsNC45NzkzNy0xLjY0MDk3LDcuNDY5MDZjMCw3LjEwMTA3LDQuMjQzNzUsMTMuODkxMTMsMTEuNDAxNDQsMTYuNjYzNjQNCgljOC44ODM2NCwzLjQ1MTY4LDE4LjkyNzEzLTEuMTAzMjMsMjIuOTQ0NjYtOS43NjA0OGw5Ljc4ODgyLTIxLjEzMzk2YzMuNzM0NTEtOC4wOTEzOCwxNS4yMjA5Mi04LjA5MTM4LDE4Ljk1NTQ2LDANCglsMTYuNDQ4MiwzNS41NTM0M2MyLjQxMjAyLDUuMjEzNjctMS43MDg5MiwxMS4wMjA4My03LjQzNzA5LDEwLjU4NzAxYy02Ny42NzI1LTUuMTI0OTQtMTA1LjA3MzAzLDM4LjcwMzA5LTEwNi4xNjQ3Niw0MC4wMDc3NA0KCWMtMC4wMjgxNCwwLjAyODMxLTAuMDI4MTQsMC4wMjgzMS0wLjAyODE0LDAuMDI4MzFjLTMuMDI3MjMsMy4xOTY5OS00Ljg5NDU4LDcuNDY5MDYtNC44OTQ1OCwxMi4yNTAxOA0KCWMwLDkuODE3MzEsNy45NDk5NCwxNy43NjcyNiwxNy43Mzg5MywxNy43NjcyNmM1LjE3NzQzLDAsOS44NDU0NS0yLjIzNDk5LDEzLjA5OTA1LTUuNzcxNDRjMCwwLDAuMDg0NzktMC4xMTMzLDAuMjU0NTMtMC4zMTEzNg0KCWMwLjExMzI4LTAuMTEzMTEsMC4yNTQ3MS0wLjI1NDUzLDAuMzk2MTMtMC40MjQyNmM0Ljk0NjEtNS4zMDEyNSwzNy42MTI0LTM3LjM5MDI3LDkyLjA2NjE1LTI2LjM1OTA3DQoJYzEyLjAxNzc4LDIuNDM0NTQsMjIuMDQ5NjgsMTAuNjgxNywyNy4yMTE2MiwyMS44MDQxNGwwLDBjMy4wMjcyMiw2LjUzNTM3LDkuNTA1OTcsMTEuMDYxOTgsMTYuNzIwMjksMTAuOTc3MDENCglDMjMyLjcyNTY2LDI0Mi4yMjQ4MiwyNDEuMjEzMTcsMjI4Ljc4NjI1LDIzNS43ODEyMiwyMTcuMDQ1MzN6Ii8+DQo8L3N2Zz4NCg==';
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
                if ((_b = (_a = window.avana) === null || _a === void 0 ? void 0 : _a.solana) === null || _b === void 0 ? void 0 : _b.isAvana) {
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
                const wallet = window.avana.solana;
                if (!wallet.isConnected) {
                    try {
                        yield wallet.connect();
                    }
                    catch (error) {
                        throw new wallet_adapter_base_1.WalletConnectionError(error === null || error === void 0 ? void 0 : error.message, error);
                    }
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
    sendTransaction(transaction, connection, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const wallet = this._wallet;
                if (!wallet)
                    throw new wallet_adapter_base_1.WalletNotConnectedError();
                try {
                    const { signers } = options, sendOptions = __rest(options, ["signers"]);
                    transaction = yield this.prepareTransaction(transaction, connection, sendOptions);
                    (signers === null || signers === void 0 ? void 0 : signers.length) && transaction.partialSign(...signers);
                    sendOptions.preflightCommitment = sendOptions.preflightCommitment || connection.commitment;
                    const { signature } = yield wallet.signAndSendTransaction(transaction, sendOptions);
                    return signature;
                }
                catch (error) {
                    if (error instanceof wallet_adapter_base_1.WalletError)
                        throw error;
                    throw new wallet_adapter_base_1.WalletSendTransactionError(error === null || error === void 0 ? void 0 : error.message, error);
                }
            }
            catch (error) {
                this.emit('error', error);
                throw error;
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
exports.AvanaWalletAdapter = AvanaWalletAdapter;
//# sourceMappingURL=adapter.js.map