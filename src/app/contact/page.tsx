import React from "react";
import Hero from "./Hero";
import ContactForm from "./ContactForm";
// import Map from "./Map";

const Contact = () => {
  return (
    <div className="w-full h-full bg-color-light">
      <Hero />
      <ContactForm />
      {/* <Map /> */}
    </div>
  );
};

export default Contact;
