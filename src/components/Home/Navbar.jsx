import React from "react";
import AnimatedText from "./AnimatedText";

const Navbar = () => {
  const navItems = ["WORK", "SERVICES", "FOURWARD", "ABOUT", "CONTACT"];

  return (
    <nav className="fixed top-0 left-0 w-full h-16 bg-transparent z-50 text-gray-700 font-formula bg-cyan-500 tracking-[0.5rem] text-[1.5rem] font-bold">
      <ul className="flex items-center justify-between mx-6 gap-10 h-full tracking-[0.1rem] text-white text-2xl font-bold">
        {navItems.map((item, index) => (
          <li key={index}>
            <AnimatedText
              text={item}
              customClasses={
                item === "FOURWARD"
                  ? "text-gray-200 text-3xl tracking-widest font-formula font-extrabold hover:text-white hover:opacity-100"
                  : "text-gray-200 opacity-80 text-xl font-semibold hover:text-white hover:opacity-100"
              }
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;