import React from "react";
import AboutUs from "./AboutUs";
import Hero from "./Hero";
import Clients from "./Clients";

const About = () => {
  return (
    <section className="w-full h-full bg-color-light">
      <Hero />
      <AboutUs />
      <Clients />
    </section>
  );
};

export default About;
