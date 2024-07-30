
"use client"
import Image from 'next/image';
import BannerImage from '../assets/Mask group.svg'
import Header from './shared/Header';
const Banner = () => {
  return (
    <div className='relative banner '>
        <div className=' sticky top-0'>
            <Header/>
        </div>
        <div className='  mt-10 w-[calc(100%_-_12px)] xl:w-[1260px] mx-auto  '>
            <div className=' flex justify-center pt-10 z-50 sm:w-[760px] mx-auto '>
                <div className='flex items-center flex-col gap-9'>
                <h4 className='xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-bold text-center sm:leading-[74px] text-[#252432]'>Awesome UI Dark Template for Webflow Agency </h4>
                <button className='px-[58px] py-[18px] rounded-[10px] bg-[#252432] text-base leading-6 text-white font-bold'>Get in Touch</button>
                </div>
            </div>
      </div>
      {/* <Image src={BannerImage} fill='true' objectFit="contain"  className='-z-10 object-center' alt='banner-image'/> */}
    </div>
  )
}

export default Banner
