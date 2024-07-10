import React from "react";
import homeHeroVideo from "../../assets/Home-Hero.mp4";

const Hero = () => {
  return (
    <div className="relative w-full h-[110vh] overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={homeHeroVideo}
        autoPlay
        loop
        muted
      />
      <div className="relative z-10 flex-col items-center justify-center w-full h-full text-center text-white mt-60">
        <div className="mt-32">
          <h1
            className="text-[123px] font-formula font-[700] leading-none tracking-normal"
            style={{ color: "rgb(241, 241, 241)", lineHeight: "1" }}
          >
            THE BEST STORIES
          </h1>
          <div>
            <h1
              className="text-[123px] font-formula font-[700] leading-none tracking-normal"
              style={{ color: "rgb(241, 241, 241)", lineHeight: "1" }}
            >
              DESERVE TO BE TOLD
            </h1>
          </div>
        </div>
       <div className="flex items-center justify-center">
       <div className="flex justify-between w-[90vw] absolute top-[40%] items-center ">
          <div className="text-center">
            <p className="text-gray-300 tracking-widest font-formula text-base font-semibold">
              FOURWARD AGENCY
            </p>
            <p className="text-white text-2xl tracking-wider font-formula font-medium leading-none">
              CHASING THE ELEMENTS
            </p>
          </div>
          <div className="text-center">
            <p className="text-gray-300 tracking-widest font-formula text-base font-semibold">
              SINCE 2024
            </p>
            <p className="text-white text-2xl font-formula tracking-wider font-medium leading-none">
              WORKING GLOBALLY
            </p>
          </div>
        </div>
       </div>
      </div>
    </div>
  );
};

export default Hero;
