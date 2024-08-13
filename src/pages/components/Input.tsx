import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  defaultDesign?: boolean;
}

const defaultClassnames =
  "bg-button-bg text-basic-white px-5 py-4 rounded-lg w-full ";
const hoverClassnames = "focus-visible:outline-none";

const Input = ({
  className = "",
  defaultDesign = true,
  ...props
}: InputProps) => {
  return (
    <input
      className={`${
        defaultDesign && defaultClassnames
      } ${hoverClassnames} ${className}`}
      {...props}
    />
  );
};

export default Input;
