import React, { useState } from "react";
import { motion } from "framer-motion";
import Service1 from "../../assets/servicepage/Service-4-1.mp4";
import Service2 from "../../assets/servicepage/Service-1-1.jpg";
import Service3 from "../../assets/servicepage/Service-4-3.mp4";

const FullScreenCards = () => {
  const [selectedWork, setSelectedWork] = useState(0);

  const works = [
    {
      title: "PAID MEDIA",
      type: "video",
      media: Service1,
    },
    {
      title: "SOCIAL MEDIA ENGAGEMENT",
      type: "image",
      media: Service2,
    },
    {
      title: "KPI'S",
      type: "video",
      media: Service3,
    },
  ];

  return (
    <div className="flex flex-col md:flex-row w-full bg-[#F1F1F1] h-screen md:h-[120vh] pt-[10vh] pb-[10vh]">
      {/* Text Section */}
      <div className="w-full md:w-[50vw] ml-4 md:ml-32 mr-4 md:mr-16 h-full flex flex-col font-formula justify-center items-start px-4 md:px-0">
        <div className="text-4xl md:text-6xl font-bold tracking-wide">
          DIGITAL MARKETING
        </div>
        <div className="font-neue mt-3 text-xs md:text-sm text-[#001514cc]">
        Development of content strategy plans, scheduling publications, interacting with followers, and measuring results on social media platforms. These efforts aim to enhance the visibility of our clients brands.
        </div>

        <div className="w-full tracking-wide mt-8 text-lg md:text-2xl font-bold flex flex-col justify-center items-start">
          {works.map((work, index) => (
            <motion.div
              key={index}
              className={`cursor-pointer py-2 border-t border-b border-gray-300 w-[95%] text-left ${
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

      {/* Media Section */}
      <div className="w-[90vw] mx-auto md:w-[50vw] md:mx-[10vw] h-full md:h-[99vh] rounded-md overflow-hidden relative">
        {works.map((work, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 w-full h-full overflow-hidden"
            style={{ display: selectedWork === index ? "block" : "none" }}
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
  );
};

export default FullScreenCards;
