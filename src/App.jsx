import React, { useState, useEffect } from "react";
import InteractiveCanvasBackground from "./components/InteractiveCanvasBackground";
import ModernNavbar from "./components/ModernNavbar";
import ModernHero from "./components/ModernHero";
import ModernProjects from "./components/ModernProjects";
import ModernSkills from "./components/ModernSkills";
import ModernExperienceEducation from "./components/ModernExperienceEducation";
import ModernContact from "./components/ModernContact";
import ModernFooter from "./components/ModernFooter";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    const sectionIds = ["home", "work", "skills", "education", "contact"];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#07090e] text-zinc-100 selection:bg-cyan-500 selection:text-black">
      {/* Three.js Interactive 3D Canvas Background */}
      <InteractiveCanvasBackground />

      {/* Subtle Grid Pattern Overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />

      {/* Top Navbar */}
      <ModernNavbar scrollTo={scrollTo} activeSection={activeSection} />

      {/* Main Content Flow */}
      <main className="relative z-10">
        <ModernHero scrollTo={scrollTo} />
        <ModernProjects />
        <ModernSkills />
        <ModernExperienceEducation />
        <ModernContact />
      </main>

      {/* Modern Footer */}
      <ModernFooter scrollTo={scrollTo} />
    </div>
  );
}

export default App;