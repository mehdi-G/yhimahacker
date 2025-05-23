import React from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import CourseDetails from "@/components/CourseDetails";
import EmotionalLiberationCourse from "@/components/EmotionalLiberationCourse";
import SupportServices from "@/components/SupportServices";
import EmotionalLiberationWorkshop from "@/components/EmotionalLiberationWorkshop";

const Home = () => {
  return (
    <React.Fragment>
      <Hero />
      <About />
      <Services />
      <CourseDetails />
      <EmotionalLiberationCourse />
      <SupportServices />
      <EmotionalLiberationWorkshop />
      <Projects />
      <Gallery />
      <Contact />
    </React.Fragment>
  );
};

export default Home;
