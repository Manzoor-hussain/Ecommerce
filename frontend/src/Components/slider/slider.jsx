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
import { NavLink } from 'react-router-dom';
import { ApiServer } from '../../ApiConstant';


export const Slider =({allProduct})=> {
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
      
      {allProduct.map((item, index) => (
               <SwiperSlide key={index}>
                    <NavLink
          to={`/add-cart/${item.id}`}
         
        >       <div className=''>
                    <img src={ApiServer + item.images[0].image} alt="image"  />
               </div>
              

                   

                <div className='py-5 bg-gray-100  '>

                    <h3 className='font-bold'>{item.name}</h3>
                    <span className='font-bold text-red-800'>Rs ,{item.price}</span>
                    <span className='line-through text-[#b4b4b4] mx-5'>{item.discount}</span>
                </div>
                </NavLink>
         
      
      
               {/* <OneComponent/> */}
               </SwiperSlide>

      ))}
     
      </Swiper>
    </div>
   
    </>
  );
}

