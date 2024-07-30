"use client"
import React from 'react'
import Logo from  '../../assets/Logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { headerData } from '@/app/utils/headerData'
const Header = () => {
 
  return (
    <div className='w-[calc(100%_-_12px)] xl:w-[1260px] mx-auto py-5 '>
   
        <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
                <Image src={Logo} width={150} alt='logo-image'/>
               
            </div>
            <div>
              <ul className='flex items-center gap-5 bg-white px-8 py-3 rounded-[20px]'>
                {
                  headerData.map((item)=>(
                    <Link className={`text-base font-normal text-[#8987A1] leading-6 hover:text-[#252432] ${item.id==1? '!text-[#252432] !font-bold ':''}`} href={`${item.link}`} key={item.id}>{item.title}</Link>
                  ))
                }
              </ul>
            </div>
        <div className='flex items-center gap-3'>
          <button className='text-base capitalize font-normal hover:text-[#252432] leading-6 text-[#8987A1]'>sign in</button>
          <button className='text-base capitalize font-bold leading-6 text-white rounded-[10px] bg-[#4E47FF] px-[36px] py-3'>sign up</button>
        </div>
        </div>
      
    </div>
  )
}

export default Header
