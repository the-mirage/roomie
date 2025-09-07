import { ButtonProps } from "@/interfaces";
import clsx from "clsx";
import React from "react";

const Button = ({
  variants = "primary",
  size = "small",
  children,
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        "bg-color-primary color-light rounded-md text-center font-body cursor-pointer hover:bg-color-tertiary hover:color-primary",
        {
          "w-full px-6 py-2 lg:text-[24px] text-[18px] font-bold":
            size === "large",
          "w-fit px-4 py-2 lg:text-[18px] text-[14px]": size === "medium",
          "w-fit px-2 py-1 lg:text-[14px] text-[12px]": size === "small",
          "rounded-md": variants === "primary",
          "rounded-l-full rounded-r-full": variants === "secondary",
        }
      )}
    >
      {children}
    </button>
  );
};
export default Button;
