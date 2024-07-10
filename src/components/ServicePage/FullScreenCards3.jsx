import React, { useState } from "react";
import { motion } from "framer-motion";
import Service1 from "../../assets/servicepage/Service-3-1.mp4";
import Service2 from "../../assets/servicepage/Service-3-2.mp4";

const FullScreenCards = () => {
  const [selectedWork, setSelectedWork] = useState(0);

  const works = [
    {
      title: "WEB DESIGN",
      type: "video",
      media: Service1,
    },
    {
      title: "E-COMMERCE",
      type: "video",
      media: Service2,
    },
  ];

  return (
    <div className="flex w-full bg-[#F1F1F1] h-[120vh] pt-[10vh] pb-[10vh]">
      <div className="flex items-center justify-center w-full h-full">
        {/* Left Side (Media) */}
        <div className="w-[50vw] mx-[10vw] h-full flex justify-center items-center">
          <div className="w-full h-[99vh] rounded-md overflow-hidden relative">
            {works.map((work, index) => (
              <motion.div
                key={index}
                className="absolute inset-0 w-full h-full overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: selectedWork === index ? 1 : 0 }}
                transition={{ duration: 0.5 }}
              >
                {work.type === "image" && (
                  <motion.img
                    src={work.media}
                    alt={work.title}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                )}
                {work.type === "video" && (
                  <motion.video
                    src={work.media}
                    autoPlay
                    loop
                    muted
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Side (Text Titles) */}
        <div className="w-[50vw] mr-32 ml-16 h-full flex flex-col font-formula justify-center items-start">
          <div className="text-6xl font-semibold tracking-wide">
          USER EXPERIENCE
          </div>
          <div className="font-neue text-sm text-[#001514cc]">
          Design and development of attractive and intuitive websites, customised to reflects the identity of our clients companies.
          </div>

          <div className="w-full tracking-wide mt-8 text-2xl flex flex-col justify-center items-start">
            {works.map((work, index) => (
              <motion.div
                key={index}
                className={`cursor-pointer py-2 border-t border-b border-gray-300 w-full text-left ${
                  selectedWork === index ? "text-black" : "text-gray-500"
                }`}
                initial={{ opacity: 0.9 }}
                whileHover={{ opacity: 1 }}
                onMouseEnter={() => setSelectedWork(index)}
              >
                {work.title}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullScreenCards;
