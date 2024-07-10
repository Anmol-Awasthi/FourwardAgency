import React from "react";

const AnimatedText = ({ text, customClassesForText, lineColor = "white" }) => {
  const baseClasses = `relative block overflow-hidden ${customClassesForText}`;
  const hoverClasses = `absolute left-0 top-full opacity-0 hover:opacity-100 hover:top-0 transition-all duration-500 ${customClassesForText}`;

  return (
    <a
      href={`#${text}`}
      data-link-alt={text}
      className="relative block overflow-hidden"
    >
      <span className={baseClasses}>{text}</span>
      <span className={hoverClasses} aria-hidden="true">
        {text}
      </span>
      <span
        className={`line`}
        style={{ backgroundColor: lineColor }}
      ></span>
    </a>
  );
};

export default AnimatedText;
