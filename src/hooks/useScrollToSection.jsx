// useScrollToSection.js
import { createContext, useContext, useRef, useState, useEffect } from "react";
import Certification from "../pages/Certification";

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

  const [activeSection, setActiveSection] = useState("intro"); // Track the active section

  // Function to scroll to the desired section
  const scrollToSection = (section) => {
    sectionRefs[section]?.current?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(section); // Manually set active section when a user clicks
  };

  // Use IntersectionObserver to detect the currently visible section
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
      { threshold: 0.5 } // Adjust this threshold for when the section is considered "in view"
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

// Custom hook to access the scroll context in any component
export const useScroll = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error("useScroll must be used within a ScrollProvider");
  }
  return context;
};

// Provider component to wrap the application
export const ScrollProvider = ({ children }) => {
  const value = useScrollToSection();
  return (
    <ScrollContext.Provider value={value}>{children}</ScrollContext.Provider>
  );
};
