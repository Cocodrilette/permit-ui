import Head from "next/head";
import type { NextPage } from "next";
import { useAccount } from "wagmi";

import { Title } from "src/components/text/title";
import { Footer } from "src/components/layout/footer";
import { TokenSend } from "src/components/token-send";
import { ConnectWallet } from "src/components/connect-wallet";

const Home: NextPage = () => {
  const { isConnected } = useAccount();

  return (
    <div className="">
      <Head>
        <title>Permit UI</title>
        <meta
          content="Transfer permit tokens between accounts"
          name="description"
        />
        {/* <link href="/favicon.ico" rel="icon" /> */}
      </Head>

      <main className="flex flex-col justify-between">
        {/* <ConnectButton /> */}

        <Title className="text-center">
          Permit <span className="text-accent">UI</span>
        </Title>

        {isConnected ? <TokenSend /> : <ConnectWallet />}
      </main>

      <Footer></Footer>
    </div>
  );
};

export default Home;
