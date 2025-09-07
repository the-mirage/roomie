import Image from "next/image";
import React from "react";
import client1 from "@/../public/images/image 4.svg";
import client2 from "@/../public/images/image 5.svg";
import client3 from "@/../public/images/image 6.svg";
import client4 from "@/../public/images/image 7.svg";
import client5 from "@/../public/images/image 8.svg";

const clients = [
  {
    alt: "client1 logo",
    display: client1,
  },
  {
    alt: "client2 logo",
    display: client2,
  },
  {
    alt: "client3 logo",
    display: client3,
  },
  {
    alt: "client4 logo",
    display: client4,
  },
  {
    alt: "client5 logo",
    display: client5,
  },
];

const Clients = () => {
  return (
    <div className=" pt-6 px-20 pb-16">
      <h1 className="text-center md:text-[30px] text-2xl font-secondary font-semibold mb-5">
        Clients
      </h1>

      <div className="flex justify-center items-center flex-wrap md:gap-10 sm:gap-8 gap-5">
        {clients.map((client) => (
          <Image key={client.alt} src={client.display} alt={client.alt} />
        ))}
      </div>
    </div>
  );
};

export default Clients;
