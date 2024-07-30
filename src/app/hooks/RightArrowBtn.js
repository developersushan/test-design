"use client"
import Image from 'next/image'
import React from 'react'
import RightArrow from '../assets/Vector1.svg'
import { useSwiper } from 'swiper/react'
const RightArrowBtn = () => {
    let swiper = useSwiper()
  return (
    <div className=''>
        <button >
       <Image  width={25} height={50} className='cursor-pointer' src={RightArrow} alt=''/>
        </button>
    </div>
  )
}

export default RightArrowBtn
