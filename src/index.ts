import { parseArgs } from "node:util";
import { rpc } from "./rpc.ts";
import { pendingNonces } from "./gap.ts";

const { values, positionals } = parseArgs({ allowPositionals: true, options: { rpc: { type: "string", default: "https://ethereum-rpc.publicnode.com" } } });
const addr = positionals[0];
if (!addr) {
  console.error("usage: node src/index.ts <address> [--rpc URL]");
  process.exit(2);
}
const latest = parseInt(await rpc<string>(values.rpc, "eth_getTransactionCount", [addr, "latest"]), 16);
const pending = parseInt(await rpc<string>(values.rpc, "eth_getTransactionCount", [addr, "pending"]), 16);
const waiting = pendingNonces(latest, pending);
console.log(`latest nonce ${latest}, pending nonce ${pending}`);
console.log(waiting.length ? `stuck: nonces ${waiting.join(", ")} are waiting; replace nonce ${waiting[0]} first` : "no pending transactions");
