import {
  SiJavascript,
  SiTailwindcss,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiSpringboot,
} from "react-icons/si";
import { IoLogoHtml5 } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io";
import { FaReact, FaJava, FaGithub } from "react-icons/fa6";
const SkillSets = [
  // {
  //   name: "HTML5",
  //   icon: <IoLogoHtml5 />,
  // },
  // {
  //   name: "CSS3",
  //   icon: <IoLogoCss3 />,
  // },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
  },
  {
    name: "Javascript",
    icon: <SiJavascript />,
  },
  {
    name: "React",
    icon: <FaReact />,
  },
  {
    name: "Redux",
    icon: <SiRedux />,
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs />,
  },
  {
    name: "Express",
    icon: <SiExpress />,
  },
  {
    name: "Java",
    icon: <FaJava />,
  },
  {
    name: "Spring Boot",
    icon: <SiSpringboot />,
  },
  {
    name: "MySQL",
    icon: <SiMysql />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
  },
];

const Skills = () => {
  return (
    <div className="h-screen w-full">
      <div className=" h-full max-w-full flex flex-col items-center justify-evenly">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-2">
          What I Do
        </h1>
        <div className="flex flex-wrap justify-center w-[80%] text-4xl md:text-6xlw lg:text-8xl  gap-10">
          {SkillSets.map((skills, index) => (
            <div className=" flex flex-col items-center w-fit " key={index}>
              <span className="hover:animate-bounce">{skills.icon}</span>
              <p className="text-lg">{skills.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
