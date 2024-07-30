"use client"
import Image from 'next/image'
import React from 'react'
import RightArrow from '../assets/Vector1.svg'
const RightArrowBtn = () => {
  return (
    <div className=''>
        <button >
       <Image  width={25} height={50} className='cursor-pointer' src={RightArrow} alt=''/>
        </button>
    </div>
  )
}

export default RightArrowBtn
