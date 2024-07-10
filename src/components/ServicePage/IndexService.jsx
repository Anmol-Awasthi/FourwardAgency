import React from 'react'
import Shine from './Shine'
import InfiniteTextCarousel from './InfiniteTextCarousel'
import FullScreenCards1 from './FullScreenCards1'
import FullScreenCards2 from './FullScreenCards2'
import FullScreenCards3 from './FullScreenCards3'
import FullScreenCards4 from './FullScreenCards4'

function IndexService() {
  return (
    <div>
      <Shine />
      <FullScreenCards1 />
      <FullScreenCards2 />
      <FullScreenCards3 />
      <FullScreenCards4 />
      <div className='w-full h-20 bg-[#F1F1F1] absolute'></div>
    </div>
  )
}

export default IndexService
