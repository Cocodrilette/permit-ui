import { formatUnits } from "viem";

export function parseBalance(data: unknown, decimal: number = 18) {
  if (!data) return "0";
  if (typeof data === "string") return formatUnits(BigInt(data), decimal);
  if (typeof data === "bigint") return formatUnits(data, decimal);
  return "0";
}
