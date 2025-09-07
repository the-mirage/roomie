import { Button } from "@/components/common";
import { PlayCircleIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import heroImage from "@/../../public/images/HeroImage.svg";

const Hero: React.FC = () => {
  return (
    <section className="w-full md:h-[75vh] h-full bg-color-secondary">
      <div className="h-full lg:px-20 sm:px-16 px-10 w-full relative">
        {/* Main Hero Content */}
        <div className="h-full flex justify-between items-center gap-5">
          {/* Hero Contect */}
          <div className="flex flex-col gap-4 justify-center lg:w-2/5">
            <h1 className="font-decorative font-semibold lg:text-[50px] md:text-4xl sm:text-3xl text-2xl color-primary">
              Paradise View
            </h1>
            <h2 className="font-primary font-bold lg:text-[55px] md:text-4xl sm:text-2xl text-xl">
              Hotel for every moment rich in emotion
            </h2>
            <p className="font-primary text-[15px] font-medium">
              Every moment feels like the first time in Paradise View
            </p>

            {/* CTA buttons */}
            <div className="flex items-center gap-6">
              <Button variants="secondary" size="medium">
                Book Now
              </Button>

              <span className="flex items-center gap-2">
                <PlayCircleIcon className="w-8 h-8 color-primary" />
                Take a tour
              </span>
            </div>
          </div>

          {/* Hero Image */}
          <div className="h-full lg:w-1/2">
            <Image
              src={heroImage}
              alt="A house with a pool"
              className="h-full object-cover"
            />
          </div>
        </div>
        {/* Quick Booking */}
        <div className="absolute w-8/9 place-self-center bottom-5 flex items-center justify-around gap-4 py-4 bg-color-light rounded-full">
          <span>Location</span>
          <span>Room type</span>
          <span>Person</span>
          <span>Check in</span>
          <span>Check out</span>
          <Button variants="primary" size="medium">
            Book Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
