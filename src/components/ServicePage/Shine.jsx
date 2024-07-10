import React from 'react'
import ShineIntroVideo from '../../assets/servicepage/Service-Shine.mp4'

function Shine() {
  return (
    <>
    <div className="bg-[#D2D9D8] bg-opacity-90 w-full h-[120vh]">
      <div className='w-[70vw] text-[22vh] font-formula font-medium text-center absolute top-[46vh] left-[50%] -translate-x-1/2 -translate-y-1/2 tracking-wide leading-[7.5rem] text-[#001514]'>
        SHINE IN THE DIGITAL WORLD
      </div>
      <div className='w-[15vw] rounded-md overflow-hidden absolute top-[79%] left-[50%] -translate-x-1/2 -translate-y-1/2'>
        <video className='w-full h-full object-cover' autoPlay loop muted src={ShineIntroVideo}></video>
      </div>
      <div className='absolute top-[110%] left-[50%] w-[30%] -translate-x-1/2 -translate-y-1/2 text-center text-[#001514] font-neue text-sm tracking-wide'>
      A brilliant team offering multidisciplinary services. Scroll to find out how we can help you.
      </div>
    </div>
    </>
  )
}

export default Shine
