import React from "react";
import { NavLink } from "react-router-dom";
import AnimatedText from "./AnimatedText";

const Navbar = ({ color = "text-gray-200", customClassesForText, lineColor = "white" }) => {
  const navItems = [
    { name: "WORK", path: "/work" },
    { name: "SERVICES", path: "/services" },
    { name: "FOURWARD", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full h-16 bg-transparent z-50 text-gray-700 font-formula bg-cyan-500 tracking-[0.5rem] text-[1.5rem] font-bold">
      <ul className="flex items-center justify-between mx-6 gap-10 h-full tracking-[0.1rem] text-white text-2xl font-bold">
        {navItems.map((item, index) => {
          let itemClasses;
          if (item.name === "FOURWARD") {
            itemClasses = `${color} text-3xl tracking-widest opacity-90 font-formula font-extrabold hover:text-white hover:opacity-100`;
          } else {
            itemClasses = `${color} opacity-80 text-xl font-medium hover:text-white hover:opacity-100`;
          }

          return (
            <li key={index}>
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
