import React from "react";
import TwoPercentBanner from "../../assets/work/Two-Percent-Banner.jpg";
import AnimatedText from "../AnimatedText";

function TwoPercent() {
  return (
    <div className="hidden md:block h-[100vh] w-full bg-[#C4CECD] flex  items-center justify-center">
      <div className="wrapper  w-[95%] h-full overflow-hidden flex md:flex-row flex-col items-center justify-between">
        <div className="md:text-[650px] flex items-center justify-center mt-32 max-w-[50%] self-center text-[#182B2A]  font-extrabold font-formula">
          2 <span className="font-formula font-medium">%</span>
        </div>
        <div className="h-full w-[50%] flex items-center justify-center">
          <div className="w-[50%] h-full flex pt-14 pr-20  items-start justify-center">
            <div className="text-2xl font-neue text-[#182B2A] leading-none">
              of our profit is donated to the projects we believe in
            </div>
          </div>
          <div className="md:w-[50%] h-full flex md:flex-row flex-col  items-center justify-center">
            <div className="h-[90%] flex flex-col w-full items-start justify-between">
              <img
                className="w-[90%] max-h-[65%] object-cover rounded-md"
                src={TwoPercentBanner}
                alt="Two Percent Banner"
              />
              <div className="text-[#182B2A] pr-5">
                In the fast-paced world of marketing and audiovisual production,
                where creativity meets strategy, FOURWARD stands out not just for
                its exceptional work, but also for its commitment to making a
                positive impact.
              </div>

              <button className="relative rounded-md py-2 px-3 shadow-lg bg-gradient-to-tr from-[#182B2A] via-[#001514] to-[#000D1B] text-zinc-300 font-formula font-semibold tracking-widest duration-500 overflow-hidden hover:text-white hover:shadow-zinc-700">
  <AnimatedText text="MORE ABOUT 2%" customClasses="" />
</button>






            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TwoPercent;
