import Image from "next/image";
import logo from "@/../public/images/logo.svg";
import Link from "next/link";
import { Button } from "../common";

const Header = () => {
  return (
    <nav className="mx-0 py-6 bg-color-secondary">
      <div className="flex items-center justify-between lg:px-20 md:px-16 px-6">
        <div className="">
          <Image src={logo} alt="logo" />
        </div>
        <div className="font-body">
          <ul className="flex lg:gap-8 md:gap-6 gap-4 justify-evenly items-center lg:text-[18px] text-[15px]">
            <li>
              <Link href="/" className="">
                Home
              </Link>
            </li>
            <li>
              <Link href="/explore">Explore</Link>
            </li>
            <li>
              <Link href="/rooms">Rooms</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <Button variants="primary" size="medium">
          Book Now
        </Button>
      </div>
    </nav>
  );
};
export default Header;
