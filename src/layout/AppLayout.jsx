import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import { motion } from "framer-motion";
const AppLayout = ({ toggleDarkMode, darkMode }) => {
  const location = useLocation();
  console.log("Current route:");
  return (
    <motion.div
      className="dark:bg-[#111111] min-h-screen bg-homepage bg-no-repeat bg-right"
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{
        duration: 0.5,
        delay: 0.25,
      }}
    >
      <div
        className={`col-span-12 h-20 w-full ${
          location.pathname == "/" ? "fixed top-0 left-0" : ""
        }`}
      >
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </div>
      <div className="col-span-12 md:col-span-10 lg:col-span-11 dark:text-white text-black">
        <Outlet />
      </div>
    </motion.div>
  );
};

export default AppLayout;
// scroll-smooth snap-y snap-mandatory overflow-scroll [&>div]:snap-center [&>div]:h-screen
