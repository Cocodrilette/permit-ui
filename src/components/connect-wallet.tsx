import { ConnectButton } from "@rainbow-me/rainbowkit";

export const ConnectWallet = () => {
  return (
    <section className="flex items-center justify-center">
      <ConnectButton accountStatus={"address"} chainStatus="icon" />
    </section>
  );
};
