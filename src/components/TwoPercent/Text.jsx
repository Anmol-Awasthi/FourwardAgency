import React from "react";
import AnimatedText from "../AnimatedText";
import { Link } from "react-router-dom";

function Text() {
  return (
    <div>
      <div className="md:h-[75vh] h-[40vh] w-full flex items-center justify-center bg-[#C0CAC9]">
        <div className="md:w-[50%] w-[95%] flex flex-col items-center justify-center text-center">
          <div className="md:text-7xl text-5xl text-[#001415] leading-[0.9em] font-formula text-[#001514cc]">
            CRAFTING SUCCESS WITH A PURPOSEFUL 2%
          </div>
          <div className="font-neue text-sm md:leading-5 leading-4 opacity-80 md:w-full w-[95%] mt-8 text-[#001514cc]">
          In the fast-paced world of marketing and audiovisual production, where creativity meets strategy, TWICE stands out not just for its exceptional work but also for its commitment to making a positive impact. This isn't just about capturing moments; it's about creating meaningful change.
          </div>
        </div>
      </div>
      <div className="md:h-[75vh] h-[40vh] w-full flex items-center justify-center bg-[#F1F1F1]">
        <div className="md:w-[50%] w-[95%] flex flex-col items-center justify-center text-center">
        <div className="md:text-7xl text-5xl text-[#001415] leading-[0.9em] font-formula text-[#001514cc]">
            JOINING FORCES FOR IMPACT
          </div>
          <div className="font-neue text-sm md:leading-5 leading-4 opacity-80 md:w-full w-[95%] mt-8 text-[#001514cc]">
          This is why 2% goes beyond mere contribution; it represents commitment, action, and the annual sharing of our collective mission. Fourward embraces the mission to define its purpose and to inspire other enterprises to do the same.
          </div>
          <Link to="/contact" className="relative mt-8 bg-[#001514e5] rounded-md py-2 px-3 shadow backdrop-blur-lg bg-gradient-to-tr from-transparent via-[rgba(121,108,121,0.16)] to-transparent text-zinc-300 font-formula font-semibold tracking-widest duration-500 overflow-hidden hover:text-white hover:shadow-zinc-200">
              
              <AnimatedText text="COLLABORATE WITH US" customClasses="" />
            </Link>
        </div>
      </div>
    </div>
  );
}

export default Text;
