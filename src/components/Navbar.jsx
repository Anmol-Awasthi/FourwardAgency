import React from "react";
import { NavLink } from "react-router-dom";
import AnimatedText from "./AnimatedText";

const Navbar = ({ color = "text-gray-200", customClassesForText, lineColor = "white" }) => {
  const navItems = [
    { name: "WORK", path: "/work" },
    { name: "SERVICES", path: "/services", mobileHide: true },
    { name: "FOURWARD", path: "/" },
    { name: "ABOUT", path: "/about", mobileHide: true },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full mt-4 sm:mt-0 h-16 bg-transparent z-50 text-gray-700 font-formula tracking-[0.5rem] text-[1.5rem] font-bold">
      <ul className="flex items-center justify-between mx-3 md:mx-6 md:gap-10 h-full tracking-[0.1rem] text-white font-bold">
        {navItems.map((item, index) => {
          let itemClasses;
          if (item.name === "FOURWARD") {
            itemClasses = `${color} absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-3xl sm:text-3xl tracking-widest opacity-90 font-formula font-extrabold hover:text-white hover:opacity-100`;
          } else {
            itemClasses = `${color} opacity-80 text-xl sm:text-xl font-bold hover:text-white hover:opacity-100`;
          }

          // Add hidden class to items with mobileHide true
          const mobileHideClass = item.mobileHide ? "hidden md:block" : "";

          return (
            <li key={index} className={mobileHideClass}>
              <NavLink
                exact
                to={item.path}
                className={itemClasses}
                activeClassName="text-white opacity-100"
              >
                <AnimatedText
                  text={item.name}
                  customClassesForText={customClassesForText}
                  lineColor={lineColor}
                />
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
