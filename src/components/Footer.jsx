import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="md:hidden w-full flex flex-row gap-4 justify-center items-center text-gray-500 text-xl p-5">
      <FaGithub className="hover:text-[#00E5FF] hover:cursor-pointer" />
      <FaLinkedin className="hover:text-[#00E5FF] hover:cursor-pointer" />
      <FaInstagram className="hover:text-[#00E5FF] hover:cursor-pointer" />
    </div>
  );
};

export default Footer;
