import { createContext, useContext, useRef, useState, useEffect } from "react";

// Create context for scroll-to-section functionality
const ScrollContext = createContext(null);

// Custom hook to provide scroll functionality and refs
export const useScrollToSection = () => {
  const sectionRefs = {
    intro: useRef(null),
    skills: useRef(null),
    projects: useRef(null),
    aboutMe: useRef(null),
    workExperience: useRef(null),
    certification: useRef(null),
  };

  const [activeSection, setActiveSection] = useState("intro");

  const scrollToSection = (section) => {
    sectionRefs[section]?.current?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(section);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionName = entry.target.getAttribute("data-section");
            setActiveSection(sectionName);
          }
        });
      },
      { threshold: 0.5 }
    );

    Object.keys(sectionRefs).forEach((section) => {
      if (sectionRefs[section].current) {
        observer.observe(sectionRefs[section].current);
      }
    });

    return () => {
      Object.keys(sectionRefs).forEach((section) => {
        if (sectionRefs[section].current) {
          observer.unobserve(sectionRefs[section].current);
        }
      });
    };
  }, [sectionRefs]);

  return { sectionRefs, scrollToSection, activeSection };
};

export const useScroll = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error("useScroll must be used within a ScrollProvider");
  }
  return context;
};

export const ScrollProvider = ({ children }) => {
  const value = useScrollToSection();
  return (
    <ScrollContext.Provider value={value}>{children}</ScrollContext.Provider>
  );
};
