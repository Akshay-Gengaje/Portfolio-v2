import Intro from "../components/Intro/Intro";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects";
import AboutMe from "../pages/AboutMe";
import WorkExperience from "../pages/WorkExperience";
import Certification from "../pages/Certification";
import Footer from "../components/Footer";
import HomePageLayout from "../layout/HomePageLayout";

import { ScrollProvider, useScroll } from "../hooks/useScrollToSection";

const Home = () => {
  return (
    <ScrollProvider>

        <HomePageLayout>
          <Sections />
        </HomePageLayout>
    </ScrollProvider>
  );
};

const Sections = () => {
  const { sectionRefs } = useScroll();

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

export default Home;
