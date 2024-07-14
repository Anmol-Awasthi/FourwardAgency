import React from 'react';
import { useNavigate } from 'react-router-dom';
import ContactVideo from '../../assets/get-in-touch.mp4';
import AnimatedText from '../AnimatedText';

function Contact() {
  const navigate = useNavigate();

  const handleExternalLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className='md:h-screen h-[80vh] w-full flex flex-col justify-center items-center'>
      <div className='relative w-full md:w-[65vw] flex md:flex-row flex-col items-center flex-wrap justify-between'>
        <span className='relative leading-none md:leading-normal -ml-28 md:ml-0 text-[15vh] md:text-[30vh] text-gray-200 font-formula font-bold'>GET IN <div className='absolute top-0 left-[95%] w-[40%] md:w-[60%] h-[90%] rounded-md overflow-hidden rotate-[5deg]'>
          <video autoPlay muted loop className='w-full h-full object-cover'>
            <source src={ContactVideo} type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        </div> </span>
        
        <span className='md:text-[30vh] leading-none md:leading-normal text-[15vh] z-10 text-gray-200 font-bold font-formula'>TOUCH</span>
      </div>
      <button className="flex gap-3 relative rounded-md py-2 px-3 shadow mt-20 backdrop-blur-lg bg-gradient-to-tr from-transparent via-[rgba(121,108,121,0.16)] to-transparent text-zinc-300 font-formula font-bold tracking-widest duration-500 overflow-hidden hover:text-white hover:shadow-zinc-100"
              onClick={() => handleExternalLink('https://t.me/phantomanmol')}>
        <svg width="24px" height="24px" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" style={{ fill: '#ffffff', fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: '1.41421' }}>
          <path id="telegram-1" d="M18.384,22.779c0.322,0.228 0.737,0.285 1.107,0.145c0.37,-0.141 0.642,-0.457 0.724,-0.84c0.869,-4.084 2.977,-14.421 3.768,-18.136c0.06,-0.28 -0.04,-0.571 -0.26,-0.758c-0.22,-0.187 -0.525,-0.241 -0.797,-0.14c-4.193,1.552 -17.106,6.397 -22.384,8.35c-0.335,0.124 -0.553,0.446 -0.542,0.799c0.012,0.354 0.25,0.661 0.593,0.764c2.367,0.708 5.474,1.693 5.474,1.693c0,0 1.452,4.385 2.209,6.615c0.095,0.28 0.314,0.5 0.603,0.576c0.288,0.075 0.596,-0.004 0.811,-0.207c1.216,-1.148 3.096,-2.923 3.096,-2.923c0,0 3.572,2.619 5.598,4.062Zm-11.01,-8.677l1.679,5.538l0.373,-3.507c0,0 6.487,-5.851 10.185,-9.186c0.108,-0.098 0.123,-0.262 0.033,-0.377c-0.089,-0.115 -0.253,-0.142 -0.376,-0.064c-4.286,2.737 -11.894,7.596 -11.894,7.596Z"/>
        </svg>
        <AnimatedText text="Anmol Awasthi" customClassesForText="text-2xl" lineColor='none' /> 
      </button>
    </div>
  );
}

export default Contact;
