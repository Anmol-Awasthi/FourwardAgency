import React from "react";
import heroIntro from "../../assets/Home-Intro.png";

function Intro() {
  return (
    <div className="h-[120vh] w-full">
      <div className="relative  flex-col items-center justify-center w-full h-full text-center text-white mt-40 font-formula ">
        <div className="flex justify-center items-center gap-3">
          <div className="text-xl font-medium tracking-wider self-start mt-2.5 text-[#C0CAC9] opacity-50">
            AGENCY
          </div>
          <div className="text-[56px] font-semibold flex self-start text-[#F1F1F1] tracking-wide">
            MARKETING & AUDIOVISUAL
          </div>
        </div>

        <div className="flex justify-center items-center text-[#C0CAC9] gap-3 leading-[1.5rem]">
          <div className="text-xl font-medium tracking-wider self-start -mt-5 text-[#C0CAC9] opacity-50">
            SERVICES
          </div>
          <div className="text-[56px] font-medium flex self-start tracking-wide">
            AUDIOVISUAL &nbsp; CREATIVITY &nbsp; USER EXPERIENCE
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="text-[56px] font-medium flex self-start text-[#C0CAC9] tracking-wide">
            DIGITAL MARKETING &nbsp; GRAPHIC DESIGN &nbsp; &nbsp;
          </div>
          <div className="text-xl font-medium tracking-wider self-start mt-2.5 text-[#C0CAC9] opacity-50 ">
            LOCATION &nbsp; &nbsp;
          </div>
          <div className="text-[56px] font-medium flex self-start text-[#C0CAC9] tracking-wide">
            DELHI, INDIA
          </div>
        </div>
        <div className="flex items-center justify-around mt-20 max-w-[58vw] ml-[21vw]">
          <div className="h-[60vh] w-[20vw] rounded-sm overflow-hidden">
            <img src={heroIntro} alt="Home Intro Image" />
          </div>
          <div>
            <div className="text-start tracking-tight font-neue text-gray-400 opacity-80 leading-5">
              Our talented team is capable of tackling <br /> challenges of all
              kinds
            </div>
            <div className="flex items-center justify-start mt-4">
            <div className="h-9 w-7 bg-transparent border-[1px] rounded-br-none rounded-tr-none border-white rounded-sm cursor-pointer"></div>
            <button className="text-left font-formula tracking-wider px-3 py-1.5 font-normal bg-white text-black rounded-tl-none rounded-bl-none rounded-sm border-gray-200 flex items-center justify-center">OUR SERVICES</button>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
