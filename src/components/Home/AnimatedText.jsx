import React from "react";

const AnimatedText = ({ text, customClasses }) => {
  return (
    <a
      href={`#${text}`}
      data-link-alt={text}
      className={`relative block overflow-hidden ${customClasses}`}
    >
      <span className="block transition-transform transform hover:-translate-y-full hover:opacity-0 duration-500">
        {text}
      </span>
      <span
        className="absolute left-0 top-full opacity-0 hover:opacity-100 hover:top-0 transition-all duration-500"
        aria-hidden="true"
      >
        {text}
      </span>
      <span className="line"></span>
    </a>
  );
};

export default AnimatedText;
