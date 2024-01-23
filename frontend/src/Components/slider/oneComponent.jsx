
import { Swiper, SwiperSlide } from 'swiper/react';
import { ASSETS } from '../../assets/path';
import { NavLink } from "react-router-dom";
import { ApiServer } from '../../ApiConstant';

export const OneComponent=({detail})=>{


    return (

        <>
        
         
         
            <NavLink
         to={`/add-cart/${detail.id}`}
         
        >       <div className=''>

                   
                    <img src={ApiServer + detail.images[0].image} alt="image"  />
               </div>
              
                   

                <div className='py-5 bg-gray-100  px-5'>

                    <h3 className='font-bold'>{detail.name}</h3>
                    <span className='font-bold text-red-800'>Rs ,{detail.price}</span>
                    <span className='line-through text-[#b4b4b4] mx-5'>{detail.discount}</span>
                </div>
                </NavLink>
         
      
        
        </>
    )
}