import AnimatedLetter from "./AnimatedLetter";
import { MdOutlineLightMode } from "react-icons/md";
import { IoMoon } from "react-icons/io5";

const Header = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className="flex justify-between items-center p-5 md:px-12 md:py-4">
      <AnimatedLetter letter={"A"} />
      <div
        className="text-4xl text-black dark:text-white p-2"
        onClick={toggleDarkMode}
      >
        {darkMode ? <MdOutlineLightMode /> : <IoMoon />}
      </div>
    </div>
  );
};

export default Header;
