import React, { useRef } from 'react';

const VideoCard = ({ imageSrc, videoSrc }) => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    videoRef.current.play();
    videoRef.current.classList.add('opacity-100');
    videoRef.current.classList.remove('opacity-0');
  };

  const handleMouseLeave = () => {
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
    videoRef.current.classList.add('opacity-0');
    videoRef.current.classList.remove('opacity-100');
  };

  return (
    <div
      className="relative overflow-hidden rounded-md cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={imageSrc}
        alt="Card Image"
        className="w-full h-full object-cover transition-opacity duration-300"
      />
      <video
        ref={videoRef}
        src={videoSrc}
        className="absolute top-0 left-0 w-full h-full object-cover opacity-0 transition-opacity duration-300"
        muted
        loop
      />
    </div>
  );
};

export default VideoCard;
