import React from "react";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLSpanElement> {}

const Textarea = ({ className, placeholder, ...props }: TextareaProps) => {
  return (
    <span
      data-before={placeholder}
      className={`text-basic-white bg-button-bg leading-6 text-xs focus-visible:outline-none text-start empty:before:content-[attr(data-before)] ${className}`}
      {...props}
    ></span>
  );
};

export default Textarea;
