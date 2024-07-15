import React from 'react'
import HeroImage from '../../assets/Two-Percent.jpg'

function BetterWorld() {
  return (
    <div className='md:h-[180vh] h-[100vh] w-full'>
      <div className='h-full overflow-hidden w-full'>
        <img src={HeroImage} alt='Two Percent Banner' className='md:h-[110%] h-full md:w-[110%] w-full object-cover' />
      </div>
      <div className='absolute md:top-[55%] top-[20%] left-1/2 -translate-x-1/2 md:-translate-y-1/2 flex flex-col items-center justify-center w-full md:w-[50%]'>
        <h1 className='text-center w-[80%] md:w-full text-[#001415] leading-[0.9em] text-7xl md:text-[8.5rem]  font-formula font-bold'>2% FOR A BETTER WORLD</h1>
        <div className='text-center opacity-80 md:tracking-tight tracking-tighter leading-7 text-[#001514cc] text-2xl mt-8 md:w-[50%] w-[70%] font-neue'>
        2% of our profit we earmark to promote social causes and a sustainable world.
        </div>
      </div>
    </div>
  )
}

export default BetterWorld
