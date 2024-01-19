
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './thumb.css';
// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';




export const ThumbSlider =()=>{
    const [thumbsSwiper, setThumbsSwiper] = useState(null);


    return (
    
    
    <>
   
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src="https://sasta-bazaar-shop.myshopify.com/cdn/shop/products/download-2023-05-17T041814.979_1080x1080.jpg?v=1692725468" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://sasta-bazaar-shop.myshopify.com/cdn/shop/products/download-2023-05-17T041816.105_180x180.jpg?v=1692725468" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://sasta-bazaar-shop.myshopify.com/cdn/shop/products/download-2023-05-17T041816.105_180x180.jpg?v=1692725468" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://sasta-bazaar-shop.myshopify.com/cdn/shop/products/download-2023-05-17T041816.105_180x180.jpg?v=1692725468" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://sasta-bazaar-shop.myshopify.com/cdn/shop/products/download-2023-05-17T041816.105_180x180.jpg?v=1692725468" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://sasta-bazaar-shop.myshopify.com/cdn/shop/products/download-2023-05-17T041816.105_180x180.jpg?v=1692725468" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://sasta-bazaar-shop.myshopify.com/cdn/shop/products/download-2023-05-17T041816.105_180x180.jpg?v=1692725468" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
        </SwiperSlide>
      </Swiper>
   
    </>
       
    )
}