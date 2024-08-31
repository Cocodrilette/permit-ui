import { FaGithub } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="text-md flex flex-col justify-center items-center p-10">
      <a
        className="text-3xl"
        href="https://github.com/cocodrilette"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>
    </footer>
  );
};
