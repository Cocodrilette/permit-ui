export const SubTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => {
  return (
    <h2 className={`text-4xl font-semibold mb-5 ${className}`}>{children}</h2>
  );
};
