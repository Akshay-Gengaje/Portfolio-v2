import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const navlinks = [
  {
    title: "Projects",
    href: "#",
  },
  {
    title: "Skills",
    href: "#",
  },
  {
    title: "About Me",
    href: "#",
  },
  {
    title: "Contact",
    href: "#",
  },
];
const Navbar = () => {
  return (
    <div className="mt-14 flex flex-col gap-16 justify-center pl-8">
      {/* nav bar links  */}
      <div className="flex flex-col items-center gap-20">
        {navlinks.map((link, index) => {
          return (
            <a
              key={index}
              href={link.href}
              className="hover:cursor-pointer -rotate-90 text-xl text-gray-700 dark:text-gray-200 hover:text-[#00E5FF] dark:hover:text-[#00E5FF]"
            >
              {link.title}
            </a>
          );
        })}
      </div>
      {/* social media icons  */}
      <div className="flex flex-col gap-10  justify-center items-center text-gray-500 text-xl">
        <FaGithub className="hover:text-[#00E5FF] hover:cursor-pointer" />
        <FaLinkedin className="hover:text-[#00E5FF] hover:cursor-pointer" />
        <FaInstagram className="hover:text-[#00E5FF] hover:cursor-pointer" />
      </div>
    </div>
  );
};

export default Navbar;
