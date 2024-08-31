import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { SupportedToken } from "src/constants/blockchain";
import Image from "next/image";

export const TokenSelector = ({
  handleSelect,
  tokens,
  selected,
}: {
  handleSelect: (index: number) => void;
  tokens: SupportedToken[];
  selected: SupportedToken | null;
}) => {
  return (
    <Dropdown>
      <DropdownTrigger>
        <button className="flex items-center justify-center gap-2 text-xl border-2 border-gray-200 px-3 py-1 rounded-full font-medium text-gray-500">
          {selected?.symbol}{" "}
          <span>
            <img
              alt={selected?.name ?? ""}
              src={selected?.icon ?? ""}
              width={20}
              height={20}
            />
          </span>
        </button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        {tokens.map((token, index) => (
          <DropdownItem
            key={token.symbol}
            onClick={() => handleSelect(index)}
            className={`
              font-semibold
              ${selected?.symbol === token.symbol ? "text-accent" : ""}`}
          >
            {token.symbol}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};
