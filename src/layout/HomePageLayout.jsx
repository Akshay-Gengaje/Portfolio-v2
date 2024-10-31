import Navbar from "../components/Navbar";

const HomePageLayout = ({ children }) => {
  return (
    <div className="grid grid-cols-12">
      <div className="hidden md:block md:col-span-2 lg:col-span-1 mt-24">
        <div className="fixed">
          <Navbar />
        </div>
      </div>
      <div className="col-span-12 md:col-span-10 lg:col-span-11 dark:text-white text-black">
        {children}
      </div>
    </div>
  );
};

export default HomePageLayout;
// scroll-smooth snap-y snap-mandatory overflow-scroll [&>div]:snap-center [&>div]:h-screen
