import { useEffect, useState } from "react";

import {
  defaultToken,
  SupportedToken,
  supportedTokens,
} from "src/constants/blockchain";
import { Section } from "./layout/sections";
import { TokenSelector } from "./layout/token-selector";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useReadContract } from "wagmi";
import { abi as erc20PermitAbi } from "src/constants/abi/erc20-permit";
import { parseBalance } from "src/utils/parse-balance";
import { isAddress, parseUnits } from "viem";

const REFRESH_INTERVAL = 10000; // 10 seconds

export const TokenSend = () => {
  const [addressInput, setAddressInput] = useState({
    value: "",
    error: "",
    isValid: false,
  });
  const [amountInput, setAmountInput] = useState({
    value: "",
    error: "",
    isValid: false,
  });
  const [selectedItem, setSelectedItem] = useState<SupportedToken | null>(
    defaultToken
  );

  const { address } = useAccount();

  const {
    error,
    isLoading,
    data: balance,
    refetch,
  } = useReadContract({
    abi: erc20PermitAbi,
    address: selectedItem?.address as `0x${string}`,
    functionName: "balanceOf",
    args: [address],
  });

  const handleSelect = (index: number) => {
    try {
      const token = supportedTokens[index];
      console.log(`Selected token: ${token.name}`);
      setSelectedItem(token);
    } catch (error) {
      console.error(`Error selecting item: ${error}`);
    }
  };

  useEffect(() => {
    if (selectedItem) {
      refetch();
      console.log(balance, error, isLoading);
    }
  }, [selectedItem]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (selectedItem) {
        refetch();
      }
    }, REFRESH_INTERVAL);

    return () => clearInterval(intervalId);
  }, [selectedItem, refetch]);

  function handleAddressChange(event: React.ChangeEvent<HTMLInputElement>) {
    console.log(event.target.value);

    if (isAddress(event.target.value)) {
      setAddressInput({
        ...addressInput,
        value: event.target.value,
        error: "",
        isValid: true,
      });

      event.target.setSelectionRange(0, 0);
    } else {
      setAddressInput({
        ...addressInput,
        value: event.target.value,
        error: "Invalid address",
      });
    }
  }

  function handleAmountChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (isNaN(Number(event.target.value))) return;

    const value = parseUnits(event.target.value, selectedItem?.decimal ?? 18);
    console.log({ value, balance });
    if (balance && value > (balance as bigint)) {
      console.log("Insufficient balance");
      setAmountInput({
        ...amountInput,
        value: event.target.value,
        error: "Insufficient balance",
        isValid: false,
      });

      return;
    }

    if (Number(event.target.value) <= 0) {
      setAmountInput({
        ...amountInput,
        value: event.target.value,
        error: "Invalid amount",
        isValid: false,
      });

      return;
    }

    setAmountInput({
      ...amountInput,
      value: event.target.value,
      error: "",
      isValid: true,
    });
  }

  return (
    <div className="flex flex-col justify-center m-auto gap-5">
      <ConnectButton />
      <Section>
        {/* <SubTitle className="text-start">Send</SubTitle> */}
        <div className="flex flex-col">
          <label className="text-sm">Balance</label>
          <div className="flex items-center justify-between gap-10">
            <p className="text-2xl font-mono">
              {parseBalance(balance, selectedItem?.decimal)}
            </p>
            <TokenSelector
              handleSelect={handleSelect}
              tokens={supportedTokens}
              selected={selectedItem}
            />
          </div>
        </div>
        <TextInput
          label="To"
          value={addressInput.value}
          isValid={addressInput.isValid}
          onChange={handleAddressChange}
        />
        <p className="text-sm text-red-500">{addressInput.error}</p>
        <TextInput
          label="Amount"
          value={amountInput.value}
          isValid={amountInput.isValid}
          onChange={handleAmountChange}
        />
        <p className="text-sm text-red-500">{amountInput.error}</p>
        <button
          disabled={!(addressInput.isValid && amountInput.isValid)}
          className="flex justify-center items-center bg-black text-white p-2 text-xl rounded-md mt-2 disabled:opacity-50"
        >
          Send
        </button>
      </Section>
    </div>
  );
};

export const TextInput = ({
  label,
  value,
  isValid,
  onChange,
}: {
  label: string;
  value: string;
  isValid?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <>
      <label className="text-sm">{label}</label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        className={`text-xl bg-transparent px-4 py-2 md:p-3 outline-none border-2 border-gray-200 transition-all rounded-lg focus:shadow-md focus:border-black font-mono ${
          isValid && "border-accent"
        }`}
      />
    </>
  );
};
