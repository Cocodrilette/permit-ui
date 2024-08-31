export type SupportedToken = {
  name: string;
  symbol: string;
  address: string;
  icon?: string;
};

export const supportedTokens: SupportedToken[] = [
  {
    name: "TokenA",
    symbol: "TKNA",
    address: "0xe7f1725e7734ce288f8367e1bb143e90bb3f0512",
    icon: "	https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
  },
  {
    name: "TokenB",
    symbol: "TOKNB",
    address: "0x5fbdb2315678afecb367f032d93f642f64180aa3",
    icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/52.png",
  },
];

export const defaultToken: SupportedToken = supportedTokens[0];

export const permitSigner = {
  address:
    process.env.NEXT_PUBLIC_PERMIT_SIGNER_ADDRESS ||
    "0xa0Ee7A142d267C1f36714E4a8F75612F20a79720", // default foundry address #9
  privateKey:
    process.env.PERMIT_SIGNER_PRIVATE_KEY ||
    "0x2a871d0798f97d79848a013d4936a73bf4cc922c825d33c1cf7073dff6d409c6", // default foundry address #9
};

export const explorerUrl =
  process.env.NEXT_PUBLIC_EXPLORER_URL || "https://amoy.polygonscan.com";
