import { useState, useEffect } from "react";
import HeroSection from "../components/landing/HeroSection";
import FeaturesSection from "../components/landing/FeaturesSection";
import HowItWorks from "../components/landing/HowItWorks";
import TeamSection from "../components/landing/TeamSection";
import CtaSection from "../components/landing/CtaSection";
import Navbar from "../components/landing/Navbar";
import Footer from "../components/landing/Footer";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("joinup-theme");
    if (saved === "dark") setDarkMode(true);
  }, []);

  const toggleDark = () => {
    setDarkMode((prev) => {
      localStorage.setItem("joinup-theme", !prev ? "dark" : "light");
      return !prev;
    });
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
        <Navbar darkMode={darkMode} toggleDark={toggleDark} />
        <HeroSection darkMode={darkMode} />
        <FeaturesSection darkMode={darkMode} />
        <HowItWorks darkMode={darkMode} />
        <TeamSection darkMode={darkMode} />
        <CtaSection darkMode={darkMode} />
        <Footer darkMode={darkMode} />
      </div>
    </div>
  );
}
