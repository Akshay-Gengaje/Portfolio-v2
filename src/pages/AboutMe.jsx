import { motion } from "framer-motion";
import { GrAchievement } from "react-icons/gr";
import { MdOutlineWorkOutline } from "react-icons/md";

const AboutMe = () => {
  return (
    <div className="max-h-screen md:h-screen w-full overflow-hidden">
      <div className="h-full max-w-full flex flex-col items-center justify-evenly">
        <h1 className="text-6xl font-bold ">About Me</h1>
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
            <img
              src="/images/profile.jpg"
              alt="profile_pic"
              className="rounded-3xl w-52"
            />
          </motion.div>
          <div className="md:w-[60%] px-10 md:px-20 mt-2">
            <div className="flex justify-between text-xl gap-10 mb-10">
              <div className="border border-black dark:border-white rounded-lg w-full p-5 flex flex-col justify-center items-center">
                <MdOutlineWorkOutline />
                <span className="mt-3 font-bold ">Experience</span>
                <p className="text-sm">1 year </p>
              </div>
              <div className="border border-black dark:border-white rounded-lg w-full p-5 flex flex-col justify-center items-center">
                <GrAchievement />
                <span className="mt-3 font-bold ">Projects</span>
                <p className="text-sm">3 Web Apps </p>
              </div>
            </div>
            <p className="h-40 md:h-full -mx-5 md:mx-0 overflow-scroll md:overflow-auto text-justify text-xl ">
              Hey there! I'm Akshay Gengaje, a MERN stack developer with a year
              of experience. I specialize in crafting dynamic web applications
              using MongoDB, Express.js, React.js, and Node.js. I'm passionate
              about creating seamless user experiences and thrive in
              collaborative environments. Let's innovate together in the world
              of web development!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
