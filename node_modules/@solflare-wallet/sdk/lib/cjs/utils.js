"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isLegacyTransactionInstance = void 0;
function isLegacyTransactionInstance(transaction) {
    return transaction.version === undefined;
}
exports.isLegacyTransactionInstance = isLegacyTransactionInstance;
