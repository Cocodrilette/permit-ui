export const Footer = () => {
  return (
    <footer className="text-md flex flex-col justify-center items-center p-10">
      <p className="font-medium text-gray-400">
        Gas left <span id="gas">0</span> POL
      </p>
      <p className="text-accent">
        <a>0x46a764e20fC0caD49f652B136D7efD484bC5FE66</a>
      </p>
    </footer>
  );
};
