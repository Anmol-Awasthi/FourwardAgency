import React from 'react'
import TwoPercentBanner from '../../assets/work/Two-Percent-Banner.jpg'

function TwoPercent() {
  return (
    <div className='h-[110vh] w-full bg-[#C4CECD] flex items-center justify-center'>
        <div className='wrapper w-[90%] h-[80%] overflow-hidden flex items-center justify-between'>
            <div className='text-[98vh] mt-32 max-w-[60%] self-center text-[#182B2A]  font-medium font-formula'>
                2%
            </div>
            <div className='text-[#182B2A]  w-[22%] mt-6 text-2xl self-start'>
                of our profit is donated to the projects we believe in
            </div>
            <div className='h-full w-[25%] mr-12 flex flex-col justify-around'>
                <div className='h-[70%] font-formula '><img className='object-cover h-full w-full ' src={TwoPercentBanner}/></div>
                <div className='text-[#182B2A] leading-snug'>In the fast-paced world of marketing and audiovisual production, where creativity meets strategy, FOURWARD stands out not just for its exceptional work, but also for its commitment to making a impact.</div>
            </div>

        </div>
      
    </div>
  )
}

export default TwoPercent
