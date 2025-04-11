import React from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";

const Home = () => {
  return (
    <React.Fragment>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Gallery />
      <Contact />
    </React.Fragment>
  );
};

export default Home;
