import { Label } from "../text/label";

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
      <Label>{label}</Label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        className={`text-xl bg-transparent px-4 py-2 md:p-3 outline-none border-2 md:border-3 border-gray-200 transition-all rounded-lg focus:shadow-md focus:border-black font-mono ${
          isValid && "border-accent"
        }`}
      />
    </>
  );
};
