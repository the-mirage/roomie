import React from "react";
import Hero from "./Hero";
import ContactForm from "./ContactForm";
import Map from "./Map";

const page = () => {
  return (
    <div className="w-full h-full bg-color-light">
      <Hero />
      <div className="flex justify-around gap-2 flex-wrap">
        <ContactForm />
        <Map />
      </div>
    </div>
  );
};

export default page;
