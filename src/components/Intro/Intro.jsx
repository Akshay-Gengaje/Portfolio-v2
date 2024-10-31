import { motion } from "framer-motion";
const Intro = () => {
  return (
    <div className="h-screen w-full flex flex-col items-start justify-center font-poppins">
      <div className="px-10 md:px-20 lg:px-52 w-full">
        <h3 className="uppercase text-2xl mb-5 font-medium tracking-widest ">
          Akshay Gengaje
        </h3>
        <h1 className="capitalize text-2xl md:text-5xl lg:text-6xl font-bold flex items-center gap-5">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.1,
            }}
          >
            React JS Developer
          </motion.h1>

          <span className="flex-1 max-w-[20%] border-b-2 dark:border-gray-200 border-gray-500" />
        </h1>
        <h1 className="capitalize text-2xl md:text-5xl lg:text-6xl font-bold mt-2">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.1,
            }}
          >
            <span className="text-gray-700 dark:text-gray-400 font-extrabold ">
              +&nbsp;
            </span>
            Full Stack Developer
          </motion.span>
        </h1>
      </div>
    </div>
  );
};

export default Intro;
