import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { foundry, polygon, polygonAmoy } from "wagmi/chains";

export const config = getDefaultConfig({
  appName: "RainbowKit App",
  projectId: "YOUR_PROJECT_ID",
  chains: [
    polygon,
    ...(process.env.NEXT_PUBLIC_ENABLE_LOCAL === "true" ? [foundry] : []),
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true"
      ? [polygonAmoy]
      : []),
  ],
  ssr: true,
});
