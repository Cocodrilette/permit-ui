export const Section = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex flex-col gap-2 border border-gray-200 shadow-md p-5 md:p-10 rounded-md  max-w-screen-sm">
      {children}
    </section>
  );
};
