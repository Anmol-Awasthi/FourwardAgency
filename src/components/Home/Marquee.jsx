import React from "react";
import { motion } from "framer-motion";
import marquee1 from "../../assets/image.png";
import marquee2 from "../../assets/image (1).png";
import marquee3 from "../../assets/image (2).png";
import marquee4 from "../../assets/image (3).png";
import marquee5 from "../../assets/image (4).png";
import marquee6 from "../../assets/image (5).png";

const images = [marquee1, marquee2, marquee3, marquee4, marquee5, marquee6];

const Marquee = () => {
  return (
    <div className="relative overflow-hidden opacity-50 h-[200px] flex items-center text-white">
      <motion.div
        className="flex items-center whitespace-nowrap"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: 30,
          ease: "linear",
        }}
      >
        {[...images, ...images].map((image, index) => (
          <div className="flex-none w-[10%] h-[10%] mx-14" key={index}>
            <img
              src={image}
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
