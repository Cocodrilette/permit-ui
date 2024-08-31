import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { Footer } from "src/components/layout/footer";
import { Section } from "src/components/layout/sections";
import { TokenSelector } from "src/components/layout/token-selector";
import { SubTitle } from "src/components/text/subtitle";
import { Title } from "src/components/text/title";
import { defaultToken, supportedTokens } from "src/constants/blockchain";

const Home: NextPage = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>(
    defaultToken.symbol
  );

  const handleSelect = (key: string) => {
    setSelectedItem(key);
    console.log(`Selected item: ${key}`);
  };

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

        <div className="flex flex-col justify-center m-auto gap-5">
          <Section>
            <SubTitle className="text-start">Token</SubTitle>
            <div className="flex items-center justify-between gap-10">
              <p className="text-3xl">1224.76</p>
              <TokenSelector
                handleSelect={handleSelect}
                tokens={supportedTokens}
                selected={selectedItem}
              />
            </div>
          </Section>
          <Section>
            <SubTitle className="text-start">Send</SubTitle>
            <input
              type="text"
              className="text-2xl bg-transparent p-3 outline-none border-3 border-secondary transition-all ease duration-75 rounded-full focus:rounded-lg focus:ring-2 focus:ring-black focus:shadow-small mb-5"
            />
            <button className="flex justify-center items-center bg-black text-white p-2 text-xl rounded-md">
              Send
            </button>
          </Section>
        </div>
      </main>

      <Footer></Footer>
    </div>
  );
};

export default Home;
