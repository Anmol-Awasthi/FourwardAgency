import React from 'react'
import ShineIntroVideo from '../../assets/servicepage/Service-Shine.mp4'

function Shine() {
  return (
    <>
    <div className=" relative bg-[#D2D9D8] bg-opacity-90 w-full h-[99vh] sm:h-[80vh] md:h-[150vh]">
      <div className='md:w-[70vw] w-[90vw] text-6xl md:text-[22vh] font-formula font-extrabold text-center absolute top-[30%] md:top-[46vh] left-[50%] -translate-x-1/2 -translate-y-1/2 tracking-wide md:leading-[7.5rem] text-[#001514]'>
        SHINE IN THE DIGITAL WORLD
      </div>
      <div className='md:w-[15vw] rounded-md overflow-hidden absolute top-[50%] sm:top-[50%] md:top-[53%] left-[50%] -translate-x-1/2 -translate-y-1/2'>
        <video className='w-full h-full object-cover' autoPlay loop muted src={ShineIntroVideo}></video>
      </div>
      <div className='absolute w-[90%] top-[80%] md:top-[80%] left-[50%] md:w-[30%] -translate-x-1/2 -translate-y-1/2 text-center text-[#001514] font-neue text-sm tracking-wide'>
      A brilliant team offering multidisciplinary services. Scroll to find out how we can help you.
      </div>
    </div>
    </>
  )
}

export default Shine
