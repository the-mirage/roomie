import React from "react";

const ContactForm = () => {
  return (
    <section className="w-full h-full py-10 px-12">
      <form className="flex flex-col justify-center gap-5">
        <div className="flex justify-around sm:flex-nowrap flex-wrap  sm:gap-12 gap-4">
          <span className="w-full flex flex-col gap-2">
            <label className="font-secondary md:text-[20px] sm:text-[16px] text-[14px] opacity-70 font-medium">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              placeholder="eg. Joan Dough"
              className="w-full placeholder:opacity-50 placeholder:font-secondary font-normal font-secondary focus:outline-0 border-1 border-[#7c6a46] rounded-md focus:border-2 focus:ring-0 md:py-4 py-2"
            />
          </span>
          <span className="w-full flex flex-col gap-2">
            <label className="font-secondary md:text-[20px] sm:text-[16px] text-[14px] opacity-70 font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="eg. joan@jdough.com"
              className="w-full placeholder:opacity-50 placeholder:font-secondary font-normal font-secondary focus:outline-0 border-1 border-[#7c6a46] rounded-md focus:border-2 focus:ring-0 md:py-4 py-2"
            />
          </span>
        </div>
        <span className="w-full h-full flex flex-col gap-2">
          <label className="font-secondary md:text-[20px] sm:text-[16px] text-[14px] opacity-70 font-medium">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows={8}
            placeholder="message"
            className="w-full placeholder:opacity-50 placeholder:font-secondary font-normal font-secondary focus:outline-0 border-1 border-[#7c6a46] rounded-md focus:border-2 focus:ring-0"
          />
        </span>
      </form>
    </section>
  );
};

export default ContactForm;
