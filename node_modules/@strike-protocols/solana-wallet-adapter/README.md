# `@strike-protocols/strike-solana-wallet`

Solana wallet adapter module for the [Strike Protocols Wallet](https://strikeprotocols.com)

## Integrating the Strike Wallet to your dApp

At a high-level, supporting the Strike Wallet in your dApp is just like supporting any other wallet supported by the
solana wallet adapter. But as a program-based multisig wallet, the Strike wallet works a bit differently from other
wallets. Because Strike wallets are PDAs (program-derived accounts), it is not possible for the Strike wallet to
physically sign a transaction or a message. There is also some transaction overhead the Strike wallet imposes. We have
worked hard to minimize the impact of these differences, but supporting the Strike wallet may still require some small
modifications from dApp developers.

### How the Strike Wallet works

Given that Strike wallets are PDAs, it may not be immediately clear how we can support dApp transactions at all. To
explain how we do it, it will be helpful to first describe how the Strike wallet works in general. All transactions
on a Strike wallet, whether they are simple transfers, config changes, or dApp transactions, are executed in the
context of a "multisig op" account.

First, an "initiation" transaction is executed, which creates and initializes the multisig op account. The multisig op
account stores a description of the requested transaction and an "approval disposition" record for each of the
multisig signers.

Subsequently, separate "set approval disposition" transactions record the disposition status (Approved or Denied) for
each signer.

Once a threshold of approvals or denies have been recorded in the multisig op account, the multisig op may be
"finalized", which executes the logic required for that transaction and then removes the multisig op account.

### How the Strike Wallet processes dApp transactions

As described above, when a dApp asks the Strike wallet to send or sign a transaction, Strike first initiates a multisig
op for that dApp transaction. The transaction instructions are serialized and persisted in the multisig op account in
1 or more "supply instruction" transactions. The multisig op is not considered "initiated" until all of those supply
instruction transactions have executed.

When a threshold of approval dispositions have been received and the finalization transaction is executed, the Strike
wallet program then rehydrates the instructions and executes them using `invoke_signed()`.

If the dApp had called the `signTransaction` or `signAllTransactions` methods in the wallet adapter, then the signed transaction which is passed
back is not the original transaction the dApp had requested, but rather the finalization transaction. Similarly, if
the dApp had called the `sendTransaction` method in the wallet adapter and supplied 1 or more additional signers, then
the Strike wallet adapter will wait until it receives the finalization transaction from the Strike backend, and it is
this transaction which the additional signers sign.

### What this means for your dApp

There are two main impacts of the Strike wallet design on dApp integration. The first is that Strike cannot support
dApp transactions which are pre-signed before being passed to the wallet adapter, and the second is that the
finalization transaction imposes a bit of overhead in terms of transaction size, heap usage, call depth, and compute
budget.

If a dApp pre-signs a transaction before passing it to the wallet adapter (whether via `sendTransaction`,
`signTransaction`, or `signAllTransactions`) then Strike will return this error message: `Strike does not support this signing mode`. To work
around this error, the dApp simply needs to either wait to sign until the transaction is returned (if
`signTransaction` or `signAllTransactions` was called), or use the `signers` option (if `sendTransaction` was called). Note that it is possible
to verify that the returned finalization transaction does actually correspond to the requested transaction by reading
the instructions from the multisig op and comparing them.

For most dApps, the main impact of the finalization transaction overhead comes down to how many accounts the dApp
transaction uses. The finalization transaction requires 3 additional accounts -- the strike wallet program, the
multisig op account and the Strike fee payer, which, to fit in the 1232 bytes available for a transaction, limits the
maximum number of accounts available to a dApp transaction to 31 (when there is a single signer and the dApp
transaction uses the wallet account). Note that any instruction parameters are already persisted in the multisig op
and are not needed in the finalization transaction.

In terms of compute budget, the finalization overhead is fairly minimal, at about 21,500 compute units. The
finalization transaction consumes one level of the allowed call depth of 4. Heap usage is harder to calculate, but
at a minimum the finalization transaction needs to rehydrate the instructions of the dApp transaction in memory.
