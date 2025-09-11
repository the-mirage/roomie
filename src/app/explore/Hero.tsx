import React from "react";
import explore from "@/../public/images/explore.svg";
import explore1 from "@/../public/images/explore1.svg";
import Image from "next/image";
import { PlayCircleIcon } from "@heroicons/react/20/solid";
const Hero = () => {
  return (
    <div>
      <div>
        <Image src={explore} alt="hotel vicinity video" className="" />
        <button>
          <span className="flex items-center gap-2">
            <PlayCircleIcon className="w-8 h-8 color-primary" />
          </span>
        </button>
      </div>
      <Image src={explore1} alt="hotel vicinity video" className="hidden" />
    </div>
  );
};

export default Hero;
