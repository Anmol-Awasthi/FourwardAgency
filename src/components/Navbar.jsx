import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import AnimatedText from "./AnimatedText";

const Navbar = ({ color = "text-gray-200", customClassesForText, lineColor = "white" }) => {
  const [scrollingUp, setScrollingUp] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;

      if (currentScrollTop > lastScrollTop && scrollingUp) {
        setScrollingUp(false);
        controls.start({ y: "-100%", opacity: 0, transition: { duration: 0.5, ease: "easeOut" } });
      } else if (currentScrollTop < lastScrollTop && !scrollingUp) {
        setScrollingUp(true);
        controls.start({ y: "0%", opacity: 1, transition: { duration: 0.5, ease: "easeOut" } });
      }
      
      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop, scrollingUp, controls]);

  const navItems = [
    { name: "WORK", path: "/work" },
    { name: "SERVICES", path: "/services", mobileHide: true },
    { name: "FOURWARD", path: "/" },
    { name: "ABOUT", path: "/about", mobileHide: true },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 md:w-full w-[100vw] sm:mt-0 h-16 bg-transparent z-50 text-gray-700 font-formula tracking-[0.5rem] text-[1.5rem] font-bold"
      animate={controls}
    >
      <ul className="flex items-center justify-between mx-3 md:mx-6 md:gap-10 h-full tracking-[0.1rem] text-white font-bold">
        {navItems.map((item, index) => {
          let itemClasses;
          if (item.name === "FOURWARD") {
            itemClasses = `${color} absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-3xl sm:text-3xl tracking-widest opacity-90 font-formula font-extrabold hover:text-white hover:opacity-100`;
          } else {
            itemClasses = `${color} opacity-80 text-xl sm:text-xl font-bold hover:text-white hover:opacity-100`;
          }

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
    </motion.nav>
  );
};

export default Navbar;
