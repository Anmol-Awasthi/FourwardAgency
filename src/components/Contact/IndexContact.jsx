import React from 'react';
import ContactVideo from '../../assets/get-in-touch.mp4';
import AnimatedText from '../AnimatedText';

function Contact() {
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
      <button className="relative rounded-md py-2 px-3 shadow mt-20 backdrop-blur-lg bg-gradient-to-tr from-transparent via-[rgba(121,108,121,0.16)] to-transparent text-zinc-300 font-formula font-bold tracking-widest duration-500 overflow-hidden hover:text-white hover:shadow-zinc-100"
              onClick={() => navigate('/services')}>
                <AnimatedText text="anmolawasthi777@gmail.com" customClassesForText="text-2xl" lineColor='none' /> 
              </button>
    </div>
  );
}

export default Contact;
