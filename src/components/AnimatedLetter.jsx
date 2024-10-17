import { useScroll } from "../hooks/useScrollToSection";

const AnimatedLetter = ({ letter }) => {
  const beforeStyle = {
    content: `"[${letter}]"`,
  };
  const { scrollToSection, activeSection } = useScroll(); 
  return (
    <div
      className="relative inline-block"
      onClick={() => scrollToSection("intro")}
    >
      <h1
        after-dynamic-value={letter}
        className={`text-6xl font-blackOpsOne text-blue-400 before:content-[attr(after-dynamic-value)] before:absolute before:top-0 before:left-0 before:h-[100%] before:text-black dark:before:text-white  before:overflow-hidden before:transition-all 
      before:ease-linear before:duration-500  hover:before:h-0`}
        style={beforeStyle}
      >
        {letter}
      </h1>
    </div>
  );
};

export default AnimatedLetter;
