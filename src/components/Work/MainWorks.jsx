import React from "react";
import VideoCard from "./VideoCard";
import overlay1 from "../../assets/work/Overlay-1.jpg";
import placeholder1 from "../../assets/work/placeholder-video-1.mp4";
import overlay2 from "../../assets/work/Overlay-2.jpg";
import placeholder2 from "../../assets/work/placeholder-video-2.mp4";
import overlay3 from "../../assets/work/Overlay-3.jpg";
import placeholder3 from "../../assets/work/placeholder-video-3.mp4";
import overlay4 from "../../assets/work/Overlay-4.jpg";
import placeholder4 from "../../assets/work/placeholder-video-4.mp4";
import overlay5 from "../../assets/work/Overlay-5.jpg";
import placeholder5 from "../../assets/work/placeholder-video-5.mp4";
import overlay6 from "../../assets/work/Overlay-6.jpg";
import placeholder6 from "../../assets/work/placeholder-video-6.mp4";
import overlay7 from "../../assets/work/Overlay-7.jpg";
import placeholder7 from "../../assets/work/placeholder-video-7.mp4";
import overlay8 from "../../assets/work/Overlay-8.jpg";
import placeholder8 from "../../assets/work/placeholder-video-8.mp4";
import overlay9 from "../../assets/work/Overlay-9.jpg";
import placeholder9 from "../../assets/work/placeholder-video-9.mp4";

const videoData = [
  { imageSrc: overlay1, videoSrc: placeholder1 },
  { imageSrc: overlay2, videoSrc: placeholder2 },
  { imageSrc: overlay3, videoSrc: placeholder3 },
  { imageSrc: overlay4, videoSrc: placeholder4 },
  { imageSrc: overlay5, videoSrc: placeholder5 },
  { imageSrc: overlay6, videoSrc: placeholder6 },
  { imageSrc: overlay7, videoSrc: placeholder7 },
  { imageSrc: overlay8, videoSrc: placeholder8 },
  { imageSrc: overlay9, videoSrc: placeholder9 },
];

const videoText1 = [
  "FOOTBALL IS NEVER DONE",
  "BORN MAN",
  "EUGENIO’S PATH TO VICTORY",
  "UNLEASH THE RIDE",
  "ON & OFF THE COURT",
  "BORN TO CHANGE THE RULES",
  "BOSS GERMAN PADEL OPEN",
  "PASSION FOR PADEL",
  "VERONICA BLUME",
];

const videoText2 = [
  "NIKE",
  "BORN",
  "CHACARRA",
  "BEWATT",
  "SLAZENGER",
  "TAMARIT",
  "WWP",
  "STARVIE",
  "BORN",
];

function MainWorks() {
  return (
    <div className="min-h-screen py-16">
      <div className="mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {videoData.map((data, index) => (
            <div key={index} className='flex flex-col items-center'>
              <VideoCard imageSrc={data.imageSrc} videoSrc={data.videoSrc} />
              <p className='mt-6 font-formula font-extrabold tracking-wide self-start leading-none opacity-80 text-2xl text-white text-start'>{videoText1[index]}</p>
              <p className='font-formula tracking-widest font-bold self-start mb-5 opacity-80 text-base text-gray-400 text-start'>{videoText2[index]}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainWorks;
