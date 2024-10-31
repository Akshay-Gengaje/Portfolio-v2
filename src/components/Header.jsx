import AnimatedLetter from "./AnimatedLetter";
import { MdOutlineLightMode } from "react-icons/md";
import { IoMoon } from "react-icons/io5";
import { useScroll } from "../hooks/useScrollToSection";
import { Link } from "react-router-dom";

const Header = ({ darkMode, toggleDarkMode }) => {
  const { activeSection } = useScroll();
  return (
    <div className="flex justify-between items-center p-5 md:px-12 md:py-4">
      <Link to={"/"}>
        <AnimatedLetter letter={"A"} />
      </Link>

      <div className="flex text-4xl text-black dark:text-white p-2 items-center">
        <ul
          className={`flex text-lg items-center justify-between mr-10 dark:text-white space-x-10  ${
            activeSection !== "intro" ? "hidden" : ""
          }`}
        >
          <Link className="hover:cursor-pointer" to={"/blogs"}>
            Blogs
          </Link>
          <Link to={"/case-studies"} className="hover:cursor-pointer">
            Case Studies
          </Link>
        </ul>
        <div onClick={toggleDarkMode}>
          {darkMode ? <MdOutlineLightMode /> : <IoMoon />}
        </div>
      </div>
    </div>
  );
};

export default Header;
