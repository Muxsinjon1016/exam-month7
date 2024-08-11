import clsx from "clsx";
import React from "react";

export const Input = ({
  type = "text",
  placeholder,
  variant = "default",
  className,
  label,
  name,
  onChange,
  register = () => ({}),
  rows = 3,
}) => {
  const variants = {
    default: "bg-eee font-semibold",
  };

  return (
    <div>
      <label className="font-bold text-lg" htmlFor={name}>
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          {...register(name)}
          placeholder={placeholder}
          className={clsx(
            "rounded-12 mt-2 py-4 outline-none px-7 w-full",
            variants[variant],
            className
          )}
          rows={rows}
        />
      ) : (
        <input
          onChange={onChange}
          {...register(name)}
          type={type}
          placeholder={placeholder}
          className={clsx(
            "rounded-12 mt-2 py-4 outline-none px-7 w-full",
            variants[variant],
            className
          )}
        />
      )}
    </div>
  );
};

export default Input;
