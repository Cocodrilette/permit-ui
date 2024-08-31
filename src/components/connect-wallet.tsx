import { ConnectButton } from "@rainbow-me/rainbowkit";

export const ConnectWallet = () => {
  return (
    <section className="flex items-center justify-center">
      <ConnectButton
        showBalance={{
          smallScreen: false,
          largeScreen: true,
        }}
        accountStatus={{
          smallScreen: "avatar",
          largeScreen: "full",
        }}
        chainStatus="icon"
      />
    </section>
  );
};
