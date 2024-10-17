import { IoLogoVercel } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaGreaterThan, FaLessThan } from "react-icons/fa6";

import { Carousel, ThemeProvider } from "@material-tailwind/react";

const theme = {
  carousel: {
    defaultProps: {
      prevArrow: ({ loop, handlePrev, firstIndex }) => {
        return (
          <button
            onClick={handlePrev}
            disabled={!loop && firstIndex}
            className="!absolute top-2/4 left-1 -translate-y-2/4 rounded-full select-none transition-all disabled:opacity-50 
            disabled:shadow-none disabled:pointer-events-none w-12 max-w-[48px] h-12 max-h-[48px] text-white hover:bg-black/10 dark:hover:bg-white/10
             active:bg-black/30 dark:active:bg-white/30 grid place-items-center"
          >
            <FaLessThan className="dark:text-white text-black text-2xl" />
          </button>
        );
      },
      nextArrow: ({ loop, handleNext, lastIndex }) => (
        <button
          onClick={handleNext}
          disabled={!loop && lastIndex}
          className="!absolute top-2/4 right-1 -translate-y-2/4 rounded-full select-none transition-all disabled:opacity-50 disabled:shadow-none
           disabled:pointer-events-none w-12 max-w-[48px] h-12 max-h-[48px] text-black hover:bg-black/10 dark:bg-white/10 active:bg-black/30
             grid place-items-center"
        >
          <FaGreaterThan className="dark:text-white text-black text-2xl" />
        </button>
      ),
      navigation: ({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-20 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-3 w-3 cursor-pointer rounded-full transition-colors content-[''] ${
                activeIndex === i ? "bg-black dark:bg-white" : "bg-gray-500"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      ),
      autoplay: false,
      autoplayDelay: 5000,
      transition: {
        type: "tween",
        duration: 0.5,
      },
      loop: false,
      className: "",
    },
    styles: {
      base: {
        carousel: {
          position: "relative",
          width: "w-full",
          height: "h-full",
          overflowX: "overflow-x-hidden",
          display: "flex",
        },

        slide: {
          width: "w-full",
          height: "h-full",
          display: "inline-block",
          flex: "flex-none",
        },
      },
    },
  },
};
const ProjectData = [
  {
    imageSrc: "/images/PizzaApp.png",
    title: "Pizza App",
    description:
      "Pizza App is a Pizza ordering app built using React and Redux. It is built with the help of the Pizza API. The app is built using the MERN stack and uses MongoDB as the database.",
    deployLink: "https://fast-react-pizza-app-zeta.vercel.app/",
    repoLink: "https://github.com/Akshay-Gengaje/fast-react-pizza-app",
  },
  {
    imageSrc: "/images/TheOasis.png",
    title: "The Hotel Booking App",
    description:
      "The Wild Oasis hotel management app is a full-featured React web application that allows hotel employees to manage cabins, bookings, and guests. The app uses Supabase for its backend and implements a variety of advanced React techniques, such as HOCs, the Compound Component Pattern, and React Query.",
    deployLink: "https://the-wild-oasis-beta-rosy.vercel.app/",
    repoLink: "https://github.com/Akshay-Gengaje/The_Wild_Oasis/tree/main",
  },
  {
    imageSrc: "/images/MovieX.png",
    title: "The MovieX Application",
    description:
      "MovieX is a dynamic and engaging movie website that provides movie enthusiasts with a wide range of movies to explore and enjoy. The website is designed to be user-friendly and easy to navigate, with a variety of features that make it simple to find the perfect movie for any occasion.",
    deployLink: "https://movie-z.vercel.app/",
    repoLink: "https://github.com/Akshay-Gengaje/The_Wild_Oasis/tree/main",
  },
  {
    imageSrc: "/images/worldwise.png",
    title: "World Wise Application",
    description:
      "The World Wise is a web app, that helps you to not lose track of countries that u visited thru out of your journey across the world.",
    deployLink: "https://worldwise-blue.vercel.app/",
    repoLink: "https://github.com/Akshay-Gengaje/The_Wild_Oasis/tree/main",
  },
];
const Projects = () => {
  return (
    <div className="h-screen">
      <div className="h-full max-w-full flex flex-col items-center justify-evenly py-10">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-2">
          Projects
        </h1>
        <ThemeProvider value={theme}>
          <Carousel className="rounded-xl" style={theme}>
            {ProjectData &&
              ProjectData.map((project) => (
                <ProjectCard
                  key={project.deployLink}
                  description={project.description}
                  imageSrc={project.imageSrc}
                  title={project.title}
                  repoLink={project.repoLink}
                  deployLink={project.deployLink}
                />
              ))}
          </Carousel>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Projects;

const ProjectCard = ({
  imageSrc,
  title,
  description,
  deployLink,
  repoLink,
}) => {
  return (
    <div className="flex lg:flex-row flex-col justify-around items-center gap-5 px-14 md:px-20 py-0 lg:px-60  h-[calc(100vh-35vh)]">
      {/* Project Image  */}
      <img src={imageSrc} alt={title} className="w-96" />
      {/* Project Details  */}
      <div className="md:pl-10 md:space-y-3">
        <h2 className="text-2xl font-bold mb-0 md:mb-0">{title}</h2>
        <p className="text-lg line-clamp-3">{description}</p>
        {/* Button To access Project  */}
        <div className="flex gap-2 lg:flex-row items-center">
          <a
            href={deployLink}
            target="_blank"
            rel="noreferrer"
            className="text-sm p-2 bg-black text-white dark:bg-white dark:text-black  rounded-lg hover:animate-pulse flex items-center gap-2"
          >
            <IoLogoVercel className="text-sm" /> Deployed App
          </a>
          <a
            href={repoLink}
            target="_blank"
            rel="noreferrer"
            className="text-sm p-2 bg-black text-white dark:bg-white dark:text-black rounded-lg hover:animate-pulse  flex items-center gap-2"
          >
            <FaGithub className="text-sm" />
            Git Repository
          </a>
        </div>
      </div>
    </div>
  );
};
