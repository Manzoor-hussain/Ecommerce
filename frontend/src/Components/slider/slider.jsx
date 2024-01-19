import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

// import required modules
import { Grid, Pagination } from 'swiper/modules';
import { ASSETS } from '../../assets/path';
import { OneComponent } from './oneComponent';
import "./Customswiper.css"
export const Slider =()=> {
    const myArray = Array(10).fill(null);
  return (
    <>
    <div className='w-[80%] mx-auto '>
     
    <Swiper
        slidesPerView={4}
        grid={{
          rows: 1,
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        className="mySwiper_home"
      >
      
      {myArray.map((item, index) => (
               <SwiperSlide key={index}>
      
               <OneComponent/>
               </SwiperSlide>

      ))}
     
      </Swiper>
    </div>
   
    </>
  );
}

