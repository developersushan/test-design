import React from 'react'

import PricingSlide from '../hooks/PricingSlide';
const Pricing = () => {
  return (
    <div className='w-[calc(100%_-_12px)] xl:w-[1043px] mx-auto'>
      <div className='flex gap-[32px]'>
        <div className='w-[387px]'>
            <div className='flex flex-col gap-4 w-[282px]'>
            <h3 className='text-[#252432] text-6xl leading-[72px] font-bold'>Pricing</h3>
            <p className='text-[#8987A1] text-sm  leading-[21px] '>Take a look at some of our recent projects to see how we've helped businesses like yours succeed online.</p>
            </div>
            <div className='py-[35px] flex flex-col gap-[31px] px-[26px] mt-[81px]'>
                <h2 className='text-[32px] leading-[48px] font-bold text-[#252432]'>Let’s Schedule a Meeting</h2>
                <button className='text-base leading-6 bg-[#4E47FF] font-bold px-[97px] rounded-[10px] text-white py-[18px]'>Schedule Meeting</button>
            </div>
        </div>
        <div className=''>
            <PricingSlide/>
        </div>
      </div>
    </div>
  )
}

export default Pricing
