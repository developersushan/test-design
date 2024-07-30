
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import './styles.css';
import { A11y, Navigation, Pagination } from 'swiper/modules';

import Slide1 from "../assets/slide1.png"
import Slide2 from "../assets/slide2.png"
import Slide3 from "../assets/slide3.png"
import Image from 'next/image';
import LeftArrowBtn from './LeftArrowBtn';
const Slider = () => {
    const SlideData =[
        {
            id:1,
            img:Slide1
        },
        {
            id:2,
            img:Slide2
        },
        {
            id:3,
            img:Slide3
        },
        {
            id:4,
            img:Slide1
        },
        {
            id:5,
            img:Slide3
        },
    ]
  return (
    <div className='flex justify-center'>
       <Swiper
        slidesPerView={3}
        spaceBetween={40}
        pagination={{
          clickable: true,
        }}
        modules={[ A11y, Navigation,Pagination]}
        className="mySwiper"
      >
        {
            SlideData.map((item)=>(
                    <SwiperSlide key={item.id}>
                        <Image width='auto' height='auto' src={item.img} className='rounded h-[400px]' alt=''/>
                    </SwiperSlide>
               
            ))
        }
        <LeftArrowBtn/>
      </Swiper>
    </div>
  )
}

export default Slider
