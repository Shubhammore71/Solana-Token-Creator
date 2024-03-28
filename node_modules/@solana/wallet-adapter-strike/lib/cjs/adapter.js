"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.StrikeWalletAdapter = exports.StrikeWalletName = void 0;
const wallet_adapter_base_1 = require("@solana/wallet-adapter-base");
exports.StrikeWalletName = 'Strike';
class StrikeWalletAdapter extends wallet_adapter_base_1.BaseSignerWalletAdapter {
    constructor(config = {}) {
        super();
        this.name = exports.StrikeWalletName;
        this.url = 'https://wallet.strikeprotocols.com';
        this.icon = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAyODEuNSAyODQuNyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjgxLjUgMjg0Ljc7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDp1cmwoI1NWR0lEXzFfKTt9Cjwvc3R5bGU+CjxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHSURfMV8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMjM5LjczMTIiIHkxPSIxNS43NTk3IiB4Mj0iNDIuNzkzOSIgeTI9IjI2Ny44Mjc5Ij4KCTxzdG9wICBvZmZzZXQ9IjAuMTg3OSIgc3R5bGU9InN0b3AtY29sb3I6IzVENkI4NyIvPgoJPHN0b3AgIG9mZnNldD0iMC4yNTY3IiBzdHlsZT0ic3RvcC1jb2xvcjojNjA2RDg4Ii8+Cgk8c3RvcCAgb2Zmc2V0PSIwLjMwNDYiIHN0eWxlPSJzdG9wLWNvbG9yOiM2NjcyOEMiLz4KCTxzdG9wICBvZmZzZXQ9IjAuMzQ2IiBzdHlsZT0ic3RvcC1jb2xvcjojNzI3QjkzIi8+Cgk8c3RvcCAgb2Zmc2V0PSIwLjM4MzkiIHN0eWxlPSJzdG9wLWNvbG9yOiM4Mjg5OUYiLz4KCTxzdG9wICBvZmZzZXQ9IjAuNDE5MiIgc3R5bGU9InN0b3AtY29sb3I6Izk5OURBRiIvPgoJPHN0b3AgIG9mZnNldD0iMC40NTI4IiBzdHlsZT0ic3RvcC1jb2xvcjojQjdCOUM2Ii8+Cgk8c3RvcCAgb2Zmc2V0PSIwLjQ4NDMiIHN0eWxlPSJzdG9wLWNvbG9yOiNERkRGRTUiLz4KCTxzdG9wICBvZmZzZXQ9IjAuNTAwNiIgc3R5bGU9InN0b3AtY29sb3I6I0ZGRkZGRiIvPgoJPHN0b3AgIG9mZnNldD0iMC41MjE5IiBzdHlsZT0ic3RvcC1jb2xvcjojRDJEM0RBIi8+Cgk8c3RvcCAgb2Zmc2V0PSIwLjU0MzciIHN0eWxlPSJzdG9wLWNvbG9yOiNCOEI5QzQiLz4KCTxzdG9wICBvZmZzZXQ9IjAuNTU3OCIgc3R5bGU9InN0b3AtY29sb3I6I0FGQjFCRCIvPgoJPHN0b3AgIG9mZnNldD0iMC41ODM1IiBzdHlsZT0ic3RvcC1jb2xvcjojQTFBNEIzIi8+Cgk8c3RvcCAgb2Zmc2V0PSIwLjY0MTUiIHN0eWxlPSJzdG9wLWNvbG9yOiM4ODhEQTEiLz4KCTxzdG9wICBvZmZzZXQ9IjAuNyIgc3R5bGU9InN0b3AtY29sb3I6Izc2N0Q5NSIvPgoJPHN0b3AgIG9mZnNldD0iMC43NTg1IiBzdHlsZT0ic3RvcC1jb2xvcjojNjg3MzhEIi8+Cgk8c3RvcCAgb2Zmc2V0PSIwLjgxNzEiIHN0eWxlPSJzdG9wLWNvbG9yOiM2MDZEODgiLz4KCTxzdG9wICBvZmZzZXQ9IjAuODc1OCIgc3R5bGU9InN0b3AtY29sb3I6IzVENkI4NyIvPgo8L2xpbmVhckdyYWRpZW50Pgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTQyLjUsMTExLjdjNTcuOSwzLjgsMTM5LjIsOS4xLDEzOS4xLDc3LjFjMCw3Ny41LTY3LjksOTUuOS0xNDAuOCw5NS45Yy03Mi43LTAuMi0xMzAuMS0xMC0xNDAuNC05Mi41bDAsMAoJYzYuMSwzLjUsMTQuNyw4LDE4LjksMTAuMmM0NCwyMy40LDEzMy4xLDEyLjEsMTMzLjEsMTIuMWwtMC40LDI1LjFsNTguNy00My45bC01Ny43LTQzLjlsLTAuNCwyMi4xYzAsMC05LTAuNi0xMy40LTAuOQoJQzgxLjIsMTY5LjItMC4yLDE2NCwwLDk2LjFDMCwxOC42LDY3LjksMCwxNDAuOCwwYzcyLjcsMC42LDEzMyw3LjYsMTQwLjgsOTIuNWwwLDBjLTU1LjctNDIuMS0xNTcuMS0yNS4zLTE1Ny4xLTI1LjNsMC40LTI1LjEKCUw2Ni4xLDg1LjlsNTcuNyw0My45bC0wLjMtMTkuNUMxMjMuNSwxMTAuNCwxMzQuMywxMTEuMiwxNDIuNSwxMTEuN3oiLz4KPC9zdmc+Cg==';
        this.supportedTransactionVersions = null;
        this._readyState = typeof window === 'undefined' || typeof document === 'undefined'
            ? wallet_adapter_base_1.WalletReadyState.Unsupported
            : wallet_adapter_base_1.WalletReadyState.Loadable;
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
    }
    get publicKey() {
        return this._publicKey;
    }
    get connecting() {
        return this._connecting;
    }
    get connected() {
        var _a;
        return !!((_a = this._wallet) === null || _a === void 0 ? void 0 : _a.isLoggedIn);
    }
    get readyState() {
        return this._readyState;
    }
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (this.connected || this.connecting)
                    return;
                if (this._readyState !== wallet_adapter_base_1.WalletReadyState.Loadable)
                    throw new wallet_adapter_base_1.WalletNotReadyError();
                this._connecting = true;
                let StrikeClass;
                try {
                    StrikeClass = (yield Promise.resolve().then(() => __importStar(require('@strike-protocols/solana-wallet-adapter')))).StrikeWallet;
                }
                catch (error) {
                    throw new wallet_adapter_base_1.WalletLoadError(error === null || error === void 0 ? void 0 : error.message, error);
                }
                let wallet;
                try {
                    wallet = window.strike || new StrikeClass();
                }
                catch (error) {
                    throw new wallet_adapter_base_1.WalletConfigError(error === null || error === void 0 ? void 0 : error.message, error);
                }
                let publicKey;
                try {
                    publicKey = yield wallet.connect(this.url);
                }
                catch (error) {
                    throw new wallet_adapter_base_1.WalletConnectionError(error === null || error === void 0 ? void 0 : error.message, error);
                }
                wallet.on('disconnect', this._disconnected);
                this._wallet = wallet;
                this._publicKey = publicKey;
                this.emit('connect', this._publicKey);
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
                    if (wallet.isLoggedIn)
                        yield wallet.cleanUp();
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
                    return yield wallet.sendTransaction(transaction, connection, options);
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
}
exports.StrikeWalletAdapter = StrikeWalletAdapter;
//# sourceMappingURL=adapter.js.map