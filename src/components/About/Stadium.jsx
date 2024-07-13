import React from 'react';
import StadiumImg from '../../assets/About/Stadium.jpg';
import PersonStadium from '../../assets/About/People-Stadium.jpg';

function Stadium() {
  return (
    <div className='relative w-full h-screen'>
      <div className='h-screen  relative'>
        <img src={StadiumImg} alt='Stadium' className='w-[95%] mx-auto h-full object-cover' />
        <div className='absolute -top-[225px] left-80 w-80 h-[450px] overflow-hidden'>
          <img src={PersonStadium} className='object-cover w-full h-full' alt='Person-Stadium' />
        </div>
      </div>
    </div>
  );
}

export default Stadium;
