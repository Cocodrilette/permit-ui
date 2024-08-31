import { explorerUrl, permitSigner } from "src/constants/blockchain";
import { shortAddress } from "src/utils/short-address";

export const Footer = () => {
  return (
    <footer className="text-md flex flex-col justify-center items-center p-10">
      <p className="font-medium text-gray-400">
        Gas left <span id="gas">0</span> POL
      </p>
      <p className="text-accent font-mono">
        <a
          href={`${explorerUrl}/address/${permitSigner.address}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {shortAddress(permitSigner.address)}
        </a>
      </p>
    </footer>
  );
};
