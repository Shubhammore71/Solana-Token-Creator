# salmon-adapter-sdk
SDK for wallet adapters.

## API

```javascript
class Salmon extends EventEmitter {
  publicKey: PublicKey | null;
  isConnected: boolean;
  connected: boolean; // for SOL Wallet Adapter compatibility
  autoApprove: boolean; // for SOL Wallet Adapter compatibility

  constructor(config: { network?: string });

  connect(): Promise<void>;
  disconnect(): Promise<void>;

  signTransaction(transaction: Transaction): Promise<Transaction>;
  signAllTransactions(transactions: Transaction[]): Promise<Transaction[]>;
  signMessage(data: Uint8Array, display: 'hex' | 'utf8' = 'utf8'): Promise<Uint8Array>;
  sign(data: Uint8Array, display: 'hex' | 'utf8' = 'utf8'): Promise<Uint8Array>; // for SOL Wallet Adapter compatibility
}
```