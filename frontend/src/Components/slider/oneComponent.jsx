
import { Swiper, SwiperSlide } from 'swiper/react';
import { ASSETS } from '../../assets/path';
export const OneComponent=()=>{


    return (

        <>
         
            <div>
                <div>
                    <img src={ASSETS.BANNER} alt="" />

                </div>
                <div className='py-5 bg-gray-100  '>

                    <h3 className='font-bold'>Tortable Recharble</h3>
                    <span className='font-bold text-red-800'>Rs ,739239</span>
                    <span className='line-through text-[#b4b4b4] mx-5'>434</span>
                </div>
            </div>
      
        
        </>
    )
}