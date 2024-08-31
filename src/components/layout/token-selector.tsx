import React, { useState } from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { SupportedToken } from "src/constants/blockchain";

export const TokenSelector = ({
  handleSelect,
  tokens,
  selected,
}: {
  handleSelect: (key: string) => void;
  tokens: SupportedToken[];
  selected: string | null;
}) => {
  return (
    <Dropdown>
      <DropdownTrigger>
        <button className="text-2xl">
          {selected} <span>🔄️</span>
        </button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        {tokens.map((token) => (
          <DropdownItem
            key={token.symbol}
            onClick={() => handleSelect(token.symbol)}
            className={selected === token.symbol ? "text-accent" : ""}
          >
            {token.symbol}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};
