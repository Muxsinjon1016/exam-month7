import clsx from "clsx";
import React from "react";

export const Button = ({
  children,
  startIcon,
  endIcon,
  type,
  className,
  variant,
  onClick,
  key,
}) => {
  const variants = {
    submit:
      "bg-[#1bc58d] rounded-12 py-2 px-4 block mx-auto text-xl font-semibold w-[80%] text-white hover:bg-[#1bc95d]",
    delete:
      "bg-red-600 hover:bg-red-500 py-2 px-5 rounded-12 font-medium text-lg text-white",
    edit: "bg-yellow-400 hover:bg-yellow-300 py-2 px-5 rounded-12 font-medium text-lg text-white",
    show: "bg-green-600 hover:bg-green-500 py-2 px-5 rounded-12 font-medium text-lg text-white",
    logOut:
      "py-[10px] px-[12px] bg-[#f7f7ff] font-bold flex items-center gap-4 rounded-6 hover:bg-[#f7f7f9]",
    add: "px-[20px] py-[14px] rounded-6 bg-[#1bc58d] flex items-center gap-2 text-white font-extrabold",
    page: "py-2 px-4 rounded-6 bg-[#f7f7ff] text-lg font-medium",
  };

  return (
    <button
      key={key}
      onClick={onClick}
      className={clsx(
        "block transition-all duration-300",
        variants[variant],
        className
      )}
      type={type}
    >
      <span>{startIcon}</span>
      <span>{children}</span>
      <span>{endIcon}</span>
    </button>
  );
};

export default Button;
