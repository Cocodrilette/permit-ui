export const SubTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => {
  return (
    <h2 className={`text-2xl md:text-4xl font-semibold mb-2 ${className}`}>
      {children}
    </h2>
  );
};
