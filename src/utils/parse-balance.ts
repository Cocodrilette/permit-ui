import { formatUnits } from "viem";

export function parseBalance(data: unknown, decimal: number = 18) {
  console.log(data, decimal);
  try {
    if (!data) return "0";
    if (typeof data === "string") return formatUnits(BigInt(data), decimal);
    if (typeof data === "bigint") return formatUnits(data, decimal);
    return "0";
  } catch (error) {
    return "No se pudo convertir el saldo";
  }
}
