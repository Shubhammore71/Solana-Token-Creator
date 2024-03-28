export function isLegacyTransactionInstance(transaction) {
    return transaction.version === undefined;
}
