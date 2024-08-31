import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import {
  arbitrum,
  base,
  foundry,
  mainnet,
  optimism,
  polygon,
  polygonAmoy,
  sepolia,
} from "wagmi/chains";

export const config = getDefaultConfig({
  appName: "RainbowKit App",
  projectId: "YOUR_PROJECT_ID",
  chains: [
    foundry,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true"
      ? [polygonAmoy]
      : [polygon]),
  ],
  ssr: true,
});
