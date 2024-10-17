import { motion } from "framer-motion";
import { GrAchievement } from "react-icons/gr";
import { MdOutlineWorkOutline } from "react-icons/md";

const AboutMe = () => {
  return (
    <div className="md:max-h-screen md:h-screen w-full overflow-hidden mb-20 md:mb-0">
      <div className="h-full max-w-full flex flex-col items-center justify-evenly">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-2">
          About Me
        </h1>
        <div className="flex flex-col md:flex-row justify-around items-center w-full">
          <motion.div
            className="h-[40%] md:h-fit md:w-[50%] flex flex-col md:flex-row justify-center"
            whileInView={{
              opacity: 1,
              transition: {
                duration: 0.5,
                ease: [0.43, 0.13, 0.23, 0.96],
              },
            }}
            initial={{ opacity: 0 }}
          >
            <img src="/images/photo.png" alt="profile_pic" className="w-60" />
          </motion.div>
          <div className="md:w-[70%] px-10 md:px-20 mt-2">
            {/* <div className="flex justify-between text-xl gap-10 mb-10">
              <div className="border border-black dark:border-white rounded-lg w-full p-5 flex flex-col justify-center items-center hover:border-white hover:bg-black hover:text-white">
                <MdOutlineWorkOutline />
                <span className="mt-3 font-bold ">Experience</span>
                <p className="text-sm">2 year </p>
              </div>
              <div className="border border-black dark:border-white rounded-lg w-full p-5 flex flex-col justify-center items-center hover:border-white hover:bg-black hover:text-white">
                <GrAchievement />
                <span className="mt-3 font-bold ">Projects</span>
                <p className="text-sm">3 Web Apps </p>
              </div>
            </div> */}
            <p className="h-fit md:h-full -mx-5 md:mx-0 md:overflow-y-auto text-justify dark:text-gray-400 text-lg">
              Hi! I'm Akshay Gengaje, a full-stack developer with a year of
              experience specializing in both the javascript and Java
              technologies. I am passionate about crafting dynamic web
              applications and creating seamless user experiences. I thrive in
              collaborative environments and am excited to innovate in the world
              of web development. Let’s work together to bring our ideas to
              life!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
