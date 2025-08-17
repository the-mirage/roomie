import Image from "next/image";
import logo from "@/../public/images/logo.svg";
import Link from "next/link";

const Header = () => {
  return (
    <nav className="mb-8 mx-0 py-6 bg-color-secondary">
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
              <Link href="/">Explore</Link>
            </li>
            <li>
              <Link href="/">Rooms</Link>
            </li>
            <li>
              <Link href="/">About</Link>
            </li>
            <li>
              <Link href="/">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="font-body lg:text-[18px] text-[15px]">
          <button className="bg-color-primary color-light px-6 py-2 rounded-md text-center">
            Book Now
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Header;
