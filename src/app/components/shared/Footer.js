import React from 'react'
import Logo from  '../../assets/Logo.png'
import Image from 'next/image'


import { InstagramIcon, LinkedinIcon, LoveIcon, RedditIcon, TiktokIcon } from '@/app/assets/icons'
import Link from 'next/link'
import { headerData } from '@/app/utils/headerData'
const Footer = () => {
  return (
    <div className='relative pb-[80px]'>
     
      

      <div className='w-[calc(100%_-_12px)] xl:w-[1260px] mx-auto bg-white rounded-[40px] px-[69px] py-[81px] flex items-center justify-between relative'>
      
        <div className='w-[360px] flex flex-col gap-[49px]'>
        <div className='flex items-center gap-2'>
           <Image src={Logo} width={150} alt='logo-image'/>
          </div>
            <p className='text-[#8987A1] text-base leading-6 font-normal '>Ready to elevate your online presence? Contact us today to discuss your project and discover how we can bring your vision to life.</p>
            <p className='flex items-center gap-3 text-[#8987A1] text-base leading-6 font-normal'><span><LoveIcon/> </span> Made with love powered by inkyy.com</p>
        </div>
        <div className='w-[400px]'>
        <div>
              <ul className='flex justify-end items-center gap-5  '>
                {
                  headerData.map((item)=>(
                    <Link className={`text-base font-normal text-[#8987A1] leading-6 hover:text-[#252432] `} href={`${item.link}`} key={item.id}>{item.title}</Link>
                  ))
                }
              </ul>
              <div className='flex justify-end gap-5 mt-[92px]'>
                <Link href=""><span><InstagramIcon/> </span></Link>
                <Link href=""><span><LinkedinIcon/> </span></Link>
                <Link href=""><span><TiktokIcon/> </span></Link>
                <Link href=""><span><RedditIcon/> </span></Link>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
