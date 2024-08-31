export const Title = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h1 className={`text-6xl font-semibold mb-7 ${className}`}>{children}</h1>
  );
};
