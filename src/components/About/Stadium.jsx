import React from 'react';
import StadiumImg from '../../assets/About/Stadium.jpg';
import PersonStadium from '../../assets/About/People-Stadium.jpg';

function Stadium() {
  return (
    <div className="relative w-full h-[50vh] md:h-screen">
      <div className="h-full flex items-center justify-center relative">
        <img src={StadiumImg} alt="Stadium" className="w-[95vw] h-[60%] rounded-lg object-cover lg:object-cover lg:w-[95%] lg:h-[100%] mx-auto" />
        <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[30vw] h-[20vh] overflow-hidden lg:-top-[225px] rounded-sm  lg:left-80 lg:w-80 lg:h-[450px] lg:transform-none">
          <img src={PersonStadium} className="object-cover w-full h-full" alt="Person-Stadium" />
        </div>
      </div>
    </div>
  );
}

export default Stadium;
