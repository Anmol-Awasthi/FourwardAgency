import React from "react";
import Image1 from "../../assets/About/About-Home-1.jpg";
import Image2 from "../../assets/About/About-Home-2.jpg";

function Competitive() {
  return (
    <div className="w-[100vw] h-[180vh]">
      <div className="absolute w-[70%] mx-auto top-[55%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
        <div className="text-center font-formula opacity-90 leading-[7.5rem] text-white font-extrabold text-[8.5rem]">
          BEING COMPETITIVE WHILE HAVING FUN
        </div>
      </div>

      <div className="relative flex items-center justify-">
        <div className="w-[65%] flex items-center justify-between absolute top-[86vh]">
          <div className="w-52 ml-24 rounded-md self-start overflow-hidden">
            <img src={Image1} alt="Image 1" />
          </div>
          <div className=" w-[30vw] flex flex-col items-center justify-center text-white opacity-70 font-neue">
            <div className="text-center leading-5">
              FOURWARD was founded in Delhi in 2024 by Anmol, Anmol and Anmol.
              Three guys whose extensive professional experience and
              entrepreneurial spirit united them in a common goal: to be
              competitive while having fun.
            </div>
            <div className="text-center mt-16 leading-5">
              The three main foundations of TWICE's identity are commitment,
              creativity, and care.
            </div>
            <div className="text-center mt-16 leading-5">
              Through our philosophy, we commit ourselves to our goals by
              working with professionalism and teamwork.
            </div>
          </div>
          <div className="absolute ml-[75vw] mb-64 w-64 rounded-md overflow-hidden">
            <img src={Image2} alt="Image 1" />
          </div>
        </div>
      </div>

      <div className="w-80 ml-[67vw] absolute bg- top-[148%]">
        <div className="text-left font-formula opacity-90  text-white font-semibold text-7xl">
            OUR VISION
        </div>
        <div className="text-left text-gray-300 mt-2 font-neue opacity-80 leading-5 font-medium text-base">
            The purpose to create stories that inspire by putting creativity at the service of emotion, using the best technical and digital media.
        </div>
      </div>
    </div>
  );
}

export default Competitive;
