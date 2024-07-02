import { useState } from "react";
import AppLayout from "./layout/AppLayout";
import Intro from "./components/Intro/Intro";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import AboutMe from "./pages/AboutMe";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={darkMode && "dark"}>
      <div className="dark:bg-[#111111] min-h-screen bg-homepage bg-no-repeat bg-right ">
        <AppLayout darkMode={darkMode} toggleDarkMode={toggleDarkMode}>
          <Intro />
          <Skills />
          <Projects />
          <AboutMe />
        </AppLayout>
      </div>
    </div>
  );
};

export default App;
