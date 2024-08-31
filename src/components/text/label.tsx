export const Label = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <label className={`text-sm md:text-base ${className}`}>{children}</label>
  );
};
