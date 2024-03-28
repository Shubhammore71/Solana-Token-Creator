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
exports.KeystoneWalletAdapter = exports.KeystoneWalletName = void 0;
const wallet_adapter_base_1 = require("@solana/wallet-adapter-base");
const web3_js_1 = require("@solana/web3.js");
exports.KeystoneWalletName = 'Keystone';
class KeystoneWalletAdapter extends wallet_adapter_base_1.BaseMessageSignerWalletAdapter {
    constructor(config = {}) {
        super();
        this.name = exports.KeystoneWalletName;
        this.url = 'https://keyst.one';
        this.icon = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxjaXJjbGUgY3g9IjE2IiBjeT0iMTYiIHI9IjE2IiBmaWxsPSJ3aGl0ZSIvPgogICAgPHJlY3QgeD0iNSIgeT0iNSIgd2lkdGg9IjIyIiBoZWlnaHQ9IjIyIiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIxIi8+CiAgICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE0LjY5NjUgNS40MzQ4N0MxNS4wOTEgNC43NTMxNiAxNi4wNzQ5IDQuNzUyMTEgMTYuNDcwOCA1LjQzMjk5TDE3LjMzOTggNi45MjcxOUMxNy42NDkgNy40NTg5NiAxNy42NDg3IDguMTE1ODggMTcuMzM4OSA4LjY0NzM0TDkuNjMxMjEgMjEuODcxQzkuMjE4NTEgMjIuNTc5MSA4LjE5NjIzIDIyLjU4MTEgNy43ODA3NiAyMS44NzQ2QzcuNzMxMzIgMjEuNzkwNiA3LjY5MzU4IDIxLjcwMDEgNy42Njg1OCAyMS42MDU4TDcuMzcwODggMjAuNDgyOUM3LjA5MjY2IDE5LjQzMzQgNy4yNDE4IDE4LjMxNjQgNy43ODU2MyAxNy4zNzY3TDE0LjY5NjUgNS40MzQ4N1pNMTIuNjYzNiAxOS4yODU4QzEzLjA2MzUgMTguNTk5NyAxNC4wMDM1IDE4LjQ3NTcgMTQuNTY3NyAxOS4wMzQ1TDE3LjQyODggMjEuODY4NkMxOC44NjA1IDIzLjI4NjcgMTguODU2NSAyNS42MDE2IDE3LjQyIDI3LjAxNDlDMTcuMjA0NSAyNy4yMjY5IDE2Ljg3OTggMjcuMjgyNSAxNi42MDYgMjcuMTU0MkwxMS42MDAyIDI0LjgwODFDMTAuNjkwNyAyNC4zODE5IDEwLjM0MyAyMy4yNjcxIDEwLjg0ODcgMjIuMzk5NEwxMi42NjM2IDE5LjI4NThaTTIwLjQzNSAxNi4zMzcyQzIxLjQ4OTcgMTYuMzM3MiAyMi4xNDc0IDE1LjE5MzkgMjEuNjE3MiAxNC4yODIyTDE5Ljc4MjggMTEuMTI4QzE5LjI1NTggMTAuMjIxOCAxNy45NDcxIDEwLjIyMTIgMTcuNDE5MiAxMS4xMjY5TDE1LjQzMDkgMTQuNTM4MUMxNC45NjYgMTUuMzM1OCAxNS41NDE0IDE2LjMzNzIgMTYuNDY0NyAxNi4zMzcyTDIwLjQzNSAxNi4zMzcyWiIgZmlsbD0iYmxhY2siLz4KICAgIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjEuNzMwMyAxNy42NDU5QzIyLjg3MTMgMTcuNjQ1OSAyMy45MjYxIDE4LjI1MjcgMjQuNDk5OCAxOS4yMzlWMTkuMjM5QzI0LjY3NjMgMTkuNTQyNyAyNC42MjQ3IDE5LjkyNzQgMjQuMzc0MyAyMC4xNzM3TDIyLjA1MTEgMjIuNDU5QzIxLjQ1MDkgMjMuMDQ5NCAyMC40ODc3IDIzLjA0NzggMTkuODg5NSAyMi40NTUzTDE2LjUxMDEgMTkuMTA3OEMxNS45Njc3IDE4LjU3MDYgMTYuMzQ4MSAxNy42NDU5IDE3LjExMTYgMTcuNjQ1OUwyMS43MzAzIDE3LjY0NTlaIiBmaWxsPSIjMjE2MUZGIi8+Cjwvc3ZnPgo=';
        this.supportedTransactionVersions = null;
        this._readyState = typeof window === 'undefined' || typeof document === 'undefined'
            ? wallet_adapter_base_1.WalletReadyState.Unsupported
            : wallet_adapter_base_1.WalletReadyState.Loadable;
        this._keyring = null;
        this._publicKey = null;
        this._connecting = false;
    }
    get publicKey() {
        return this._publicKey;
    }
    get connecting() {
        return this._connecting;
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
                let keyring;
                try {
                    const { DefaultKeyring } = yield Promise.resolve().then(() => __importStar(require('@keystonehq/sol-keyring')));
                    keyring = DefaultKeyring.getEmptyKeyring();
                }
                catch (error) {
                    throw new wallet_adapter_base_1.WalletLoadError(error === null || error === void 0 ? void 0 : error.message, error);
                }
                let account;
                try {
                    yield keyring.readKeyring();
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                    account = keyring.getAccounts()[0].pubKey;
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
                this._keyring = keyring;
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
            if (this._keyring) {
                this._keyring = null;
                this._publicKey = null;
            }
            this.emit('disconnect');
        });
    }
    signTransaction(transaction) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const keyring = this._keyring;
                const publicKey = (_a = this._publicKey) === null || _a === void 0 ? void 0 : _a.toString();
                if (!keyring || !publicKey)
                    throw new wallet_adapter_base_1.WalletNotConnectedError();
                try {
                    return (yield keyring.signTransaction(publicKey, transaction));
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
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const keyring = this._keyring;
                const publicKey = (_a = this._publicKey) === null || _a === void 0 ? void 0 : _a.toString();
                if (!keyring || !publicKey)
                    throw new wallet_adapter_base_1.WalletNotConnectedError();
                try {
                    return keyring.signMessage(publicKey, message);
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
exports.KeystoneWalletAdapter = KeystoneWalletAdapter;
//# sourceMappingURL=adapter.js.map