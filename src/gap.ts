export function pendingNonces(latest: number, pending: number): number[] {
  const out: number[] = [];
  for (let n = latest; n < pending; n++) out.push(n);
  return out;
}
