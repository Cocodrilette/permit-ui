// Define a union type for the keys
export type TokenKey = "default" | "uWatt";

// Define the SupportedToken type
export type SupportedToken = {
  symbol: string;
  address: string;
};

// Use a mapped type to create the SupportedToken object
export const supportedTokens: SupportedToken[] = [
  {
    symbol: "uWatt",
    address: "0x",
  },
];

export const defaultToken: SupportedToken = supportedTokens[0];
