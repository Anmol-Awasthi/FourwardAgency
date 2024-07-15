import React from 'react'
import Competitive from './Competitive'
import Marquee from '../Home/Marquee.jsx'
import Stadium from './Stadium.jsx'
import Globe from './Globe.jsx'
import TwoPercent from '../Work/TwoPercent.jsx'

function IndexAbout() {
  return (
    <div className='w-[100vw] md:overflow-x-hidden'>
      <Competitive />
      <Marquee />
      <Stadium />
      <Globe />
      <TwoPercent />
      {/* <div className='w-full h-20 bg-[#C4CECD] absolute'></div> */}
    </div>
  )
}

export default IndexAbout
