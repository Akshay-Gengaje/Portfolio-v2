import React from "react";
import { FaGithub, FaLinkedin, FaDev  } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="md:hidden w-full flex flex-row gap-4 justify-center items-center text-gray-500 text-xl p-5">
      <a href="https://github.com/Akshay-Gengaje" target="_blank">
        <FaGithub className="hover:text-[#00E5FF] hover:cursor-pointer" />
      </a>
      <a href="https://www.linkedin.com/in/akshay-gengaje/" target="_blank">
        <FaLinkedin className="hover:text-[#00E5FF] hover:cursor-pointer" />
      </a>
      <a href="https://dev.to/akshay_gengaje">
        <FaDev className="hover:text-[#00E5FF] hover:cursor-pointer" />
      </a>
    </div>
  );
};

export default Footer;
