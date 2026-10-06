# nonce-gap-checker

Checks whether an address has stuck transactions on several EVM chains. A stuck (underpriced)
transaction blocks every later transaction from the same account, and it shows up as a difference
between two nonces:

- `eth_getTransactionCount(addr, "latest")` counts mined transactions
- `eth_getTransactionCount(addr, "pending")` also counts what's in the node's mempool

```bash
node src/index.ts 0xYourAddress
node src/index.ts 0xYourAddress --rpc https://mainnet.base.org
```

If the pending nonce is higher, it prints the waiting nonces. To unblock the account, replace the
lowest one with a transaction that uses the same nonce and a higher fee.

```bash
npm test
```
