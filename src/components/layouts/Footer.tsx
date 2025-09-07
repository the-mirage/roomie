const Footer = () => {
  return (
    <footer className="bg-color-primary color-light md:pt-24 pt-16">
      <div className="flex justify-around flex-wrap gap-8 w-full lg:px-20 md:px-16 px-6 pb-16">
        {/* Hotel Details Snippet */}
        <div className="flex flex-col sm:items-baseline items-center gap-4 md:w-1/5">
          <h1 className="font-decorative font-bold text-3xl">Paradise View</h1>
          <p className="font-primary lg:text-[14px] text-[12px]">
            The best place to relax and unwind. Experience luxury like never
            before with our exclusive rooms and amenities.
          </p>
        </div>
        {/* Quick Links */}
        <div className="flex flex-col gap-4">
          <h2 className="font-primary font-bold lg:text-[18px] text-[15px]">
            Quick Links
          </h2>
          <ul className="flex flex-col gap-2 lg:text-[14px] text-[12px]">
            <li>Room booking</li>
            <li>Rooms</li>
            <li>Contact</li>
            <li>Explore</li>
          </ul>
        </div>
        {/* Company links */}
        <div className="flex flex-col gap-4">
          <h2 className="font-primary font-bold lg:text-[18px] text-[15px]">
            Company
          </h2>
          <ul className="flex flex-col gap-2 lg:text-[14px] text-[12px]">
            <li>Privacy Policy</li>
            <li>Refund Policy</li>
            <li>F.A.Q</li>
            <li>About Us</li>
            <li>Terms of Service</li>
          </ul>
        </div>

        {/* Social Media links */}
        <div className="flex flex-col gap-4">
          <h2 className="font-primary font-bold lg:text-[18px] text-[15px]">
            Social Media
          </h2>
          <ul className="flex flex-col gap-2 lg:text-[14px] text-[12px]">
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>LinkedIn</li>
          </ul>
        </div>
        {/* Newsletter */}
        <div className="flex flex-col gap-4 md:w-1/5">
          <h2 className="font-primary font-bold lg:text-[18px] text-[15px]">
            Newsletter
          </h2>
          <p className="lg:text-[14px] text-[12px]">
            Subscribe to our newsletter to receive the latest deals and offers
            our rooms and vacation discount.
          </p>
          <form className="relative w-full">
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="bg-color-light placeholder:text-gray-500 md:py-3 py-4 w-full px-1 rounded-md focus:outline-none text-black md:text-[14px] text-[12px]"
            />
            <button
              type="submit"
              className="absolute inset-y-0 right-1 bg-color-primary color-light lg:text-[14px] text-[12px] rounded-sm my-1 px-4"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <hr className="my-4" />
      <div className="lg:px-20 md:px-16 px-6 py-4">
        <p className="text-center lg:text-[14px] text-[12px]">
          © {new Date().getFullYear()} Paradise View. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
