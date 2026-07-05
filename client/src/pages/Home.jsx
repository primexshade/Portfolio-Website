import Navbar from "../layout/Navbar";

import Hero from "../sections/Hero";
import About from "../sections/About";
import Experience from "../sections/Experience";
import Skills from "../sections/Skills";
import FeaturedProjects from "../sections/FeaturedProjects";
import ContactSection from "../sections/ContactSection";

function Home() {
  return (
    <>
      <Navbar />

      <Hero />
      <About />
      <Experience />
      <Skills />
      <FeaturedProjects />
      <ContactSection />
    </>
  );
}

export default Home;