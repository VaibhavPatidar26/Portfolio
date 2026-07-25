import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { projects } from "./data/projects";

function App() {
  const scrollTo = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white overflow-x-hidden">
      <Navbar scrollTo={scrollTo} />

      <main>
        <Hero scrollTo={scrollTo} />

        <Projects projects={projects} />

        <Skills />

        <Education />

        <Contact />

        <Footer scrollTo={scrollTo} />
      </main>
    </div>
  );
}

export default App;