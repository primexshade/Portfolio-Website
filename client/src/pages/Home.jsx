import Navbar from "../layout/Navbar";

import Hero from "../sections/Hero";
import About from "../sections/About";
import Experience from "../sections/Experience";
import Skills from "../sections/Skills";
import FeaturedProjects from "../sections/FeaturedProjects";
import Contact from "../sections/Contact";
import Footer from "../layout/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <Hero />
      <FeaturedProjects />
      <About />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;