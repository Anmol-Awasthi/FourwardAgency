import React from 'react'
import Competitive from './Competitive'
import Marquee from '../Home/Marquee.jsx'
import Stadium from './Stadium.jsx'
import Globe from './Globe.jsx'

function IndexAbout() {
  return (
    <div className='w-[100vw] md:overflow-x-hidden'>
      <Competitive />
      <Marquee />
      <Stadium />
      <Globe />
    </div>
  )
}

export default IndexAbout
