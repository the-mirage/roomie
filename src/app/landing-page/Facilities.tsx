import {
  wifi,
  breakfast,
  game,
  gym,
  laundry,
  pool,
  light,
  valet,
} from "@/../public/icons";
import Image from "next/image";

const services = [
  {
    title: "Swimming Pool",
    description: "Enjoy our luxurious swimming pool with a stunning view.",
    icon: pool,
  },
  {
    title: "Wi-Fi",
    description:
      "Stay connected with our high-speed Wi-Fi throughout the hotel.",
    icon: wifi,
  },
  {
    title: "Breakfast",
    description: "Start your day with a complimentary breakfast buffet.",
    icon: breakfast,
  },
  {
    title: "Gym",
    description: "Stay fit with our fully equipped gym available 24/7.",
    icon: gym,
  },
  {
    title: "Game Center",
    description:
      "Enjoy our game center with a variety of games and entertainment.",
    icon: game,
  },
  {
    title: "24/7 Room Service",
    description: "Experience our 24/7 room service for your convenience.x",
    icon: light,
  },
  {
    title: "Laundry Service",
    description: "Get your clothes cleaned with our efficient laundry service.",
    icon: laundry,
  },
  {
    title: "Parking Space",
    description: "Secure parking space available for our guests.",
    icon: valet,
  },
];

const Facilities: React.FC = () => {
  return (
    <div className="mt-10 bg-color-light w-full h-full">
      <div className="h-full xl:px-20 lg:px-16 md:px-10 px-10">
        <h1 className="font-body lg:text-5xl md:text-[40px] sm:text-3xl text-2xl font-medium text-center">
          Our Facilities
        </h1>
        <p className="text-center font-body text-[15px] mt-2 font-medium">
          We offer modern (5 star) hotel facilities for your comfort
        </p>

        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center gap-6 lg:px-16 sm:px-10 px-6 py-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-color-secondary flex flex-col items-center justify-center gap-4 lg:w-60 w-full h-60 rounded-md cursor-pointer hover:bg-color-primary shadow-sm"
            >
              <span className="hover:color-light">
                <Image src={service.icon} alt={service.description} />
              </span>
              <h2 className="font-body text-[20px] color-primary hover:color-light md:font-semibold font-medium">
                {service.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Facilities;
