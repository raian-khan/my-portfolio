import React, { useEffect } from "react";
import Layout from "./components/layout/Layout";
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import SkillsSection from "./components/sections/SkillsSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import ContactSection from "./components/sections/ContactSection";
import AOS from "aos";
import "aos/dist/aos.css";
import { useDarkMode } from "./hooks/useDarkMode";

const App: React.FC = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  useEffect(() => {
    // Initialize AOS animation library
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
    });

    // Apply dark mode to the <html> element
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <Layout toggleDarkMode={toggleDarkMode} darkMode={darkMode}>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </Layout>
    </div>
  );
};

export default App;
