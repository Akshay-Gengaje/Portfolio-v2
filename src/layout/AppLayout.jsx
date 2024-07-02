import Header from "../components/Header";
import Navbar from "../components/Navbar";

const AppLayout = ({ toggleDarkMode, darkMode, children }) => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-12 h-24 fixed w-full top-0 left-0">
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </div>
      <div className="hidden md:block md:col-span-2 lg:col-span-1 mt-24">
        <div className="fixed">
          <Navbar />
        </div>
      </div>
      <div className="col-span-12 md:col-span-10 lg:col-span-11 dark:text-white text-black max-h-screen scroll-smooth snap-y snap-mandatory overflow-scroll [&>div]:snap-center [&>div]:h-screen">
        {children}
      </div>
    </div>
  );
};

export default AppLayout;
