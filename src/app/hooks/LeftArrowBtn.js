"use client"
import Image from 'next/image'
import React from 'react'
import LeftArrow from '../assets/Vector.svg'
import { useSwiper } from 'swiper/react'
const LeftArrowBtn = () => {
    const swiper = useSwiper()
  return (
    <div>
        <button onClick={() => swiper.slideNext()}>
       <Image  width={25} height={50} className='cursor-pointer' src={LeftArrow} alt=''/>
        </button>
    </div>
  )
}

export default LeftArrowBtn
