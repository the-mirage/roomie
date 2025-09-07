import React from "react";

const Hero = () => {
  return (
    <section className="w-full relative bg-[url('/images/video.svg')] bg-cover bg-no-repeat h-[75vh] w-auto">
      <div className="absolute inset-0 bg-color-primary opacity-40 z-0" />
      {/* Add hero content */}
      <div className="relative flex flex-col justify-center gap-4 items-center h-full z-10 px-10">
        <h1 className="font-secondary font-extrabold lg:text-6xl md:text-5xl sm:text-3xl text-2xl color-light">
          About Us
        </h1>
        <p className="font-secondary md:font-semibold md:text-[20px] text-[15px] color-light text-center lg:w-1/2 md:w-3/5 w-3/4">
          The elegant luxury bedrooms in this gallery showcase custom interior
          designs & decorating ideas. View pictures and find your perfect luxury
          bedroom design.
        </p>
      </div>
    </section>
  );
};

export default Hero;
