import { useState } from "react";

import {
  defaultToken,
  SupportedToken,
  supportedTokens,
} from "src/constants/blockchain";
import { Section } from "./layout/sections";
import { TokenSelector } from "./layout/token-selector";
import { SubTitle } from "./text/subtitle";

export const TokenSend = () => {
  const [selectedItem, setSelectedItem] = useState<SupportedToken | null>(
    defaultToken
  );

  const handleSelect = (index: number) => {
    try {
      const token = supportedTokens[index];
      console.log(`Selected token: ${token.name}`);
      setSelectedItem(token);
    } catch (error) {
      console.error(`Error selecting item: ${error}`);
    }
  };

  return (
    <div className="flex flex-col justify-center m-auto gap-5">
      <Section>
        <SubTitle className="text-start">Token</SubTitle>
        <div className="flex items-center justify-between gap-10">
          <p className="text-2xl font-mono">1224.76</p>
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
          className="text-2xl bg-transparent p-2 md:p-3 outline-none border-2 border-gray-200 transition-all ease duration-75 rounded-full focus:rounded-lg focus:ring-2 focus:ring-black focus:shadow-small mb-5"
        />
        <button className="flex justify-center items-center bg-black text-white p-2 text-xl rounded-md">
          Send
        </button>
      </Section>
    </div>
  );
};
