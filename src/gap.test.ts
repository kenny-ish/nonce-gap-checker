import { test } from "node:test";
import assert from "node:assert/strict";
import { pendingNonces } from "./gap.ts";

test("lists waiting nonces", () => {
  assert.deepEqual(pendingNonces(5, 8), [5, 6, 7]);
  assert.deepEqual(pendingNonces(5, 5), []);
});
