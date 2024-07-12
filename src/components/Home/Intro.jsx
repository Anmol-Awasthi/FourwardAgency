import React from "react";
import heroIntro from "../../assets/Home-Intro.png";
import AnimatedText from "../AnimatedText";

function Intro() {
  return (
    <div className="h-screen w-full">
      <div className="relative flex flex-col items-center justify-center w-full h-full text-center text-white mt-20 md:mt-40 font-formula">
        {/* Mobile View */}
        <div className="md:hidden flex flex-col items-center gap-3 mb-6">
          <div className="flex items-center justify-center gap-4">
            <div className="text-base font-semibold tracking-wider self-start text-[#C0CAC9] opacity-50">
              AGENCY
            </div>
            <div className="text-3xl font-semibold self-start text-white tracking-wide">
              MARKETING & AUDIOVISUAL
            </div>
          </div>
          <div className="flex items-center justify-center gap-4">
          <div className="text-base font-semibold tracking-wider self-start text-[#C0CAC9] opacity-50">
              SERVICES
            </div>
            <div className="text-3xl font-semibold self-start opacity-90 tracking-wide">
              AUDIOVISUAL &nbsp; CREATIVITY
            </div>
          </div>
          <div className="text-3xl font-semibold opacity-90 tracking-wide">
            USER EXPERIENCE &nbsp; DIGITAL MARKETING
          </div>
          <div className="flex items-center justify-center gap-3">
            <div className="text-3xl font-semibold opacity-90 tracking-wide">
              GRAPHIC DESIGN &nbsp;
            </div>
            <div className="text-base font-semibold tracking-wider self-start text-[#C0CAC9] opacity-50 -mr-2">
              LOCATION &nbsp;
            </div>
            <div className="text-3xl font-semibold self-start opacity-90 tracking-wide">
              DELHI, INDIA
            </div>
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden md:flex flex-col items-center leading-none">
          <div className="relative flex justify-center items-start gap-3">
            <div className="text-xl font-bold tracking-wider text-[#C0CAC9] opacity-50 self-start relative">
              AGENCY
            </div>
            <div className="text-[56px] font-bold flex text-[#F1F1F1] tracking-wide">
              MARKETING & AUDIOVISUAL
            </div>
          </div>

          <div className="  flex justify-center items-start gap-3">
          <div className="text-xl font-bold tracking-wider text-[#C0CAC9] opacity-50 self-start relative">

              SERVICES
            </div>
            <div className="text-[56px] font-bold opacity-90 flex self-start tracking-wide">
              AUDIOVISUAL &nbsp; CREATIVITY &nbsp; USER EXPERIENCE
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="text-[56px] font-bold flex self-start text-[#C0CAC9] tracking-wide">
              DIGITAL MARKETING &nbsp; GRAPHIC DESIGN &nbsp; &nbsp;
            </div>
            <div className="text-xl font-bold tracking-wider text-[#C0CAC9] opacity-50 self-start relative">
              LOCATION &nbsp; &nbsp;
            </div>
            <div className="text-[56px] font-bold flex self-start text-[#C0CAC9] tracking-wide">
              DELHI, INDIA
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-around md:justify-between mt-20 max-w-[90vw] md:w-[50%] mx-auto">
          <div className="h-[40vh] md:h-[60vh] w-full md:w-[20vw] rounded-sm overflow-hidden mb-6 md:mb-0">
            <img
              src={heroIntro}
              alt="Home Intro Image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:text-start flex-col items-center md:items-start justify-center flex text-center tracking-tight font-neue text-gray-400 opacity-80 leading-5">
            Our talented team is capable of tackling <br /> challenges of all
            kinds
            <div className="flex items-center justify-start mt-4">
              <button className="relative rounded-md py-2 px-3 shadow backdrop-blur-lg bg-gradient-to-tr from-transparent via-[rgba(121,108,121,0.16)] to-transparent text-zinc-300 font-formula font-bold tracking-widest duration-500 overflow-hidden hover:text-white hover:shadow-zinc-100">
                <AnimatedText text="OUR SERVICES" customClassesForText="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
