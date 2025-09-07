import Image from "next/image";
import React from "react";
import Royal from "@/../public/images/Royal.svg";
import shower from "@/../public/icons/Shower.svg";
import { ComputerDesktopIcon } from "@heroicons/react/24/outline";
import { WifiIcon } from "@heroicons/react/20/solid";
import { Button } from "@/components/common";

const roomData = [
  {
    name: "The Royal Room",
    price: 10,
    availability: "Yes",
    image: Royal,
  },
  {
    name: "The Royal Room",
    price: 10,
    availability: "Yes",
    image: Royal,
  },
  {
    name: "The Royal Room",
    price: 10,
    availability: "Yes",
    image: Royal,
  },
  {
    name: "The Royal Room",
    price: 10,
    availability: "Yes",
    image: Royal,
  },
  {
    name: "The Royal Room",
    price: 10,
    availability: "Yes",
    image: Royal,
  },
  {
    name: "The Royal Room",
    price: 10,
    availability: "Yes",
    image: Royal,
  },
  {
    name: "The Royal Room",
    price: 10,
    availability: "Yes",
    image: Royal,
  },
  {
    name: "The Royal Room",
    price: 10,
    availability: "Yes",
    image: Royal,
  },
  {
    name: "The Royal Room",
    price: 10,
    availability: "Yes",
    image: Royal,
  },
];

const RoomList = () => {
  return (
    <section
      id="rooms-list"
      className="h-full lg:pt-16 md:pt-10 pt-6 px-20 pb-24"
    >
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 md:gap-10 gap-5">
        {roomData.slice(0, 6).map((room, index) => (
          <div key={index} className="bg-color-light shadow-sm rounded-sm pb-4">
            <div className="">
              <Image src={room.image} alt={room.name} className="w-full" />
              <span className="flex justify-between items-center gap-2 mx-4  mt-2">
                <h1 className="font-secondary font-semibold text-2xl color-primary">
                  {room.name}
                </h1>
                <p className="color-primary font-secondary font-light text-[12px]">
                  Available: {room.availability}
                </p>
              </span>
              <p className="font-body font-medium text-[20px] color-primary ml-4">
                ${room.price}
              </p>
            </div>

            <hr className="border-1 color-primary my-3" />

            <div className="flex lg:justify-between justify-around gap-4 items-center px-4">
              <div className="flex justify-around items-center gap-4">
                <span className="p-3 bg-[#f2f2f2] rounded-full">
                  <ComputerDesktopIcon className="w-5 h-5 color-primary" />
                </span>
                <span className="p-3 bg-[#f2f2f2] rounded-full">
                  <WifiIcon className=" w-5  h-5 color-primary" />
                </span>
                <span className="p-3 bg-[#f2f2f2] rounded-full">
                  <Image src={shower} alt="shower" className="w-5 h-5" />
                </span>
              </div>
              <Button variants="primary" size="medium">
                Book Now
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RoomList;
