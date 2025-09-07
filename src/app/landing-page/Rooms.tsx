import Image from "next/image";
import React from "react";
import room1 from "@/../public/images/Room1.svg";
import room2 from "@/../public/images/Room2.svg";
import room3 from "@/../public/images/Room3.svg";

const Rooms: React.FC = () => {
  return (
    <section className="w-full bg-[url('/images/roombg.svg')] bg-cover bg-no-repeat">
      <div className="w-full bg-color-primary opacity-80 pointer-events-none py-10 px-20">
        <div className="color-light flex flex-col items-center gap-4 mb-10">
          <h1 className="font-primary md:text-5xl text-3xl font-semibold">
            Luxurious Rooms
          </h1>
          <hr className="text-center border-3 md:w-48 w-40" />
          <p className="text-[15px] font-primary font-medium">
            Experience comfort and elegance in our well-appointed rooms.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-6 gap-4 w-full">
          <div className="w-full bg-color-light flex flex-col items-center p-4 mx-auto rounded-md">
            <span className="relative">
              <p className="absolute top-2 right-4 font-bold font-primary text-[11px] bg-color-primary p-2 rounded-md color-light">
                2 Rooms available
              </p>
              <Image src={room1} alt="" className="z-0" />
            </span>
            <p>Television set, Extra sheets and Breakfast</p>
          </div>
          <div className="w-full bg-color-light flex flex-col items-center p-4 mx-auto rounded-md">
            <span className="relative">
              <p className="absolute top-2 right-4 font-bold font-primary text-[11px] bg-color-primary p-2 rounded-md color-light">
                4 Rooms available
              </p>
              <Image src={room2} alt="" />
            </span>
            <p className="w-3/4 text-center">
              Television set, Extra sheets, Breakfast, and fireplace
            </p>
          </div>
          <div className="w-full bg-color-light flex flex-col items-center p-4 mx-auto rounded-md">
            <span className="relative">
              <p className="absolute top-2 right-4 font-bold font-primary text-[11px] bg-color-primary p-2 rounded-md color-light">
                8 Rooms available
              </p>
              <Image src={room3} alt="" />
            </span>
            <p className="w-3/4 text-center">
              Television set, Extra sheets, Breakfast, and fireplace, Console
              and bed rest
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rooms;
