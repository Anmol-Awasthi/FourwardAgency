import React from "react";
import AnimatedText from "../AnimatedText";

function Testimonials() {
  return (
    <div className="w-full md:h-screen mt-24">
      <div className="font-formula text-gray-100 text-5xl md:text-[92px] font-[700] leading-none tracking-wide flex-col text-center justify-center items-center">
        <div className="leading-none">JUST BELIEVE OUR</div>
        <div className="flex items-center justify-center leading-none">
          CLIENTS
          <svg
            width="48"
            height="30"
            viewBox="0 0 56 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-4 self-start leading-none max-w-10 max-h-5 md:ml-2 md:max-w-full md:max-h-full"
          >
            <path
              d="M12.8921 19.2393H5.70438V0.405971H25.3782V19.5275L12.6687 39.594H0.73768L13.2351 19.8625L13.6298 19.2393H12.8921ZM43.0957 19.2393H35.9081V0.405971H55.5818V19.5275L42.8723 39.594H30.9413L43.4387 19.8625L43.8334 19.2393H43.0957Z"
              fill="none"
              stroke="#FFFF00"
              strokeWidth="1.5"
            ></path>
          </svg>
          WORDS
        </div>
      </div>

      {/* Desktop View */}

      <div className="w-full mt-16 flex flex-col items-center justify-center font-formula tracking-wide leading-none text-3xl font-semibold text-gray-200 hidden md:block">
        {/* First row */}
        <div className="flex flex-row items-center justify-around w-full opacity-80 mb-8 md:mb-0">
          <div className="text-center md:w-[45%]">
            <div>THE BEST DRIVEN</div>
            <div>PRODUCT COMPANY</div>
            <div className="text-base text-gray-400 mt-3">BEWATT</div>
          </div>
          <div className="text-center md:w-[45%]">
            <div>FOURWARD SETS</div>
            <div>BRAND TRENDS</div>
            <div className="text-base text-gray-400 mt-3">EUGENIO CHACARRA</div>
          </div>
          <div className="text-center md:w-[45%]">
            <div>VICTORIOUS SINCE 1881</div>
            <div className="text-base text-gray-400 mt-3">SLAZENGER</div>
          </div>
        </div>

        {/* Second row */}
        <div className="flex flex-row items-center justify-center w-full opacity-80 mt-8 md:mb-0">
          <div className="text-center md:w-[35%]">
            <div>A SOUL MIND IN A SOUND</div>
            <div>BODY</div>
            <div className="text-base text-gray-400 mt-3">ASICS</div>
          </div>
          <div className="text-center md:w-[35%]">
            <div>INSPIRING AN ACTIVE AND</div>
            <div>HEALTHY LIFESTYLE</div>
            <div className="text-base text-gray-400 mt-3">BORN</div>
          </div>
        </div>
      </div>

      {/* Mobile view */}

      <div className="w-full mt-28 flex flex-col items-center justify-center font-formula tracking-normal leading-none text-2xl font-bold text-gray-200 md:hidden">
        {/* First row */}
        <div className="flex flex-row items-center justify-around w-full opacity-80 mb-8 md:mb-0">
          <div className="text-center md:w-[45%]">
            <div>THE BEST DRIVEN</div>
            <div>PRODUCT COMPANY</div>
            <div className="text-base tracking-wide text-gray-400 mt-3">BEWATT</div>
          </div>
          <div className="text-center md:w-[45%]">
            <div>FOURWARD SETS</div>
            <div>BRAND TRENDS</div>
            <div className="text-base tracking-wide text-gray-400 mt-3">EUGENIO CHACARRA</div>
          </div>
        </div>

        {/* Second row */}
        <div className="flex flex-row items-center justify-center w-full opacity-80 mb-8">
          <div className="text-center md:w-[30%]">
            <div>VICTORIOUS SINCE 1881</div>
            <div className="text-base tracking-wide text-gray-400 mt-3">SLAZENGER</div>
          </div>
        </div>

        {/* Third row */}
        <div className="flex flex-row items-center justify-around w-full opacity-80 mb-8 md:mb-0">
          <div className="text-center md:w-[45%]">
            <div>A SOUL MIND IN A SOUND</div>
            <div>BODY</div>
            <div className="text-base tracking-wide text-gray-400 mt-3">ASICS</div>
          </div>
          <div className="text-center md:w-[45%]">
            <div>INSPIRING AN ACTIVE AND</div>
            <div>HEALTHY LIFESTYLE</div>
            <div className="text-base tracking-wide text-gray-400 mt-3">BORN</div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center md:mt-4">
        <button className="relative rounded-md py-2 px-3 shadow backdrop-blur-lg bg-gradient-to-tr from-transparent via-[rgba(121,108,121,0.16)] to-transparent text-zinc-300 font-bold font-formula tracking-widest duration-500 overflow-hidden hover:text-white hover:shadow-zinc-100">
          <AnimatedText text="WORK WITH US" customClassesForText="" />
        </button>
      </div>
    </div>
  );
}

export default Testimonials;
