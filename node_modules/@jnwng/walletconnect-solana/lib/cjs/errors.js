"use strict";
// Taken from https://stackoverflow.com/a/41429145/2247097
Object.defineProperty(exports, "__esModule", { value: true });
exports.QRCodeModalError = exports.ClientNotInitializedError = void 0;
class ClientNotInitializedError extends Error {
    constructor() {
        super();
        // Set the prototype explicitly.
        Object.setPrototypeOf(this, ClientNotInitializedError.prototype);
    }
}
exports.ClientNotInitializedError = ClientNotInitializedError;
class QRCodeModalError extends Error {
    constructor() {
        super();
        // Set the prototype explicitly.
        Object.setPrototypeOf(this, QRCodeModalError.prototype);
    }
}
exports.QRCodeModalError = QRCodeModalError;
//# sourceMappingURL=errors.js.map