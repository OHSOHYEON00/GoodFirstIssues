import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({ className, children, ...props }: ButtonProps) => {
  return (
    <button
      className={`px-6 py-3 bg-button-bg text-button-text rounded-lg ${className} `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
