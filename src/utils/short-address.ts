export const shortAddress = (address: string) => {
  if (address.length < 42) {
    return address;
  }

  return `${address.slice(0, 8)}...${address.slice(-6)}`;
};
