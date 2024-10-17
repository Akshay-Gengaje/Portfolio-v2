import { FaGithub, FaLinkedin, FaDev } from "react-icons/fa";
import { useScroll } from "../hooks/useScrollToSection"; // Import the custom hook

const navlinks = [
  { title: "Skills", section: "skills" },
  { title: "Projects", section: "projects" },
  { title: "About Me", section: "aboutMe" },
  { title: "Experience", section: "workExperience" },
  { title: "Certifications", section: "certification" },
];

const Navbar = () => {
  const { scrollToSection, activeSection } = useScroll(); // Access the scroll function and active section
  return (
    <div className="h-fit mt-5 flex flex-col justify-between pl-4">
      {/* Navigation Links */}
      <div className="flex flex-col items-stretch">
        {navlinks.map((link, index) => (
          <button
            key={index}
            onClick={() => scrollToSection(link.section)}
            className={`hover:cursor-pointer -rotate-90 text-[1.1rem] ${
              activeSection === link.section
                ? "text-[#00E5FF]" // Active link color
                : "text-gray-700 dark:text-gray-200" // Inactive link color
            } hover:text-[#00E5FF]`}
            style={
              index !== navlinks.length - 1 // Check if it's not the last element
                ? { marginBottom: `${link.title.length * 9}px` } // Apply marginBottom dynamically
                : { marginBottom: `${link.title.length * 5}px` } // Don't apply margin to the last element
            }
          >
            {link.title}
          </button>
        ))}
      </div>
      {/* Social Media Icons */}
      <div className="fixed bottom-16 left-5 flex flex-row gap-3 justify-center items-center text-gray-500 text-xl">
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
    </div>
  );
};

export default Navbar;
