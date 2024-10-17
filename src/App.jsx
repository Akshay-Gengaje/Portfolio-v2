import React, { useState } from "react";
import AppLayout from "./layout/AppLayout";
import Intro from "./components/Intro/Intro";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import AboutMe from "./pages/AboutMe";
import WorkExperience from "./pages/WorkExperience";
import { motion } from "framer-motion";
import { ScrollProvider, useScroll } from "./hooks/useScrollToSection"; // Import the provider and hook
import Certification from "./pages/Certification";
import Footer from "./components/Footer";
const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const toggleDarkMode = () => setDarkMode(!darkMode);
  return (
    <ScrollProvider>
      <div className={darkMode ? "dark" : ""}>
        <motion.div
          className="dark:bg-[#111111] min-h-screen bg-homepage bg-no-repeat bg-right"
          variants={{
            hidden: { opacity: 0, y: 75 },
            vissible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="vissible"
          transition={{
            duration: 0.5,
            delay: 0.25,
          }}
        >
          <AppLayout darkMode={darkMode} toggleDarkMode={toggleDarkMode}>
            <Sections />
          </AppLayout>
        </motion.div>
      </div>
    </ScrollProvider>
  );
};

const Sections = () => {
  const { sectionRefs } = useScroll(); // Access the refs from the custom hook

  return (
    <>
      <div ref={sectionRefs.intro} data-section="intro">
        <Intro />
      </div>
      <div ref={sectionRefs.skills} data-section="skills">
        <Skills />
      </div>
      <div ref={sectionRefs.projects} data-section="projects">
        <Projects />
      </div>
      <div ref={sectionRefs.aboutMe} data-section="aboutMe">
        <AboutMe />
      </div>
      <div ref={sectionRefs.workExperience} data-section="workExperience">
        <WorkExperience />
      </div>
      <div ref={sectionRefs.certification} data-section="certification">
        <Certification />
      </div>
      <Footer />
    </>
  );
};

export default App;
