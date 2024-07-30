"use client"
import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import './styles.css';
import { A11y, Navigation, Pagination } from 'swiper/modules';
import { pricingData } from '../utils/pricingData';
import { MarkIcon } from '../assets/icon';
import RightArrow from '../assets/Vector1.svg'
import Image from 'next/image';
const PricingSlide = () => {
    const swiper = useSwiper()
  return (
    <div className='flex justify-center w-[624px] '>
         <Swiper
        slidesPerView={1}
        spaceBetween={40}
        pagination={{
          clickable: true,
        }}
        modules={[ A11y, Navigation,Pagination]}
        className="mySwiper"
      >
        {
            pricingData.map((item)=>(
                    <SwiperSlide key={item.id}>
                     <div className='w-[443px] mx-auto  mt-[25px]' key={item.id}>
                        <h3 className='text-[#252432] text-[32px] leading-[38px] font-bold mb-9'  >{item.title}</h3>
                        <p className='text-sm text-[#8987A1] font-normal'>{item.des}</p>
                        <div className='grid grid-cols-2 gap-[18px] mt-9'>
                            {
                                item?.item.map((n)=>(
                                        <h3 key={n.id} className='flex items-center gap-1 text-[#252432] text-sm leading-[25px]'><span><MarkIcon/></span>{n.name}</h3>      
                                ))
                            }
                        </div>
                    </div>
                    <div className='px-[22.5px] mt-[41px]'>
                        <div className='px-[42px] py-[27px] flex items-center justify-between'>
                            <h3 className='text-6xl leading-[70px] font-bold text-[#252432]'>${item.price} <span className='text-[#8987A1] text-sm font-normal'>/mo</span></h3>
                        <button><Image  width={25} height={50} className='cursor-pointer' src={RightArrow} alt=''/></button>
                        </div>
                    </div>
                    </SwiperSlide>
               
            ))
        }
      </Swiper>
    </div>
  )
}

export default PricingSlide
