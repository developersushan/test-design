import React from 'react'
import { serviceData } from '../utils/serviceData'
import Image from 'next/image'
import { serviceRightData } from '../utils/serviceRightData'

const Services = () => {
  return (
    <div className='w-[calc(100%_-_12px)] xl:w-[1260px] mx-auto'>
      <div>
        <h3 className='text-[#252432] text-6xl leading-[72px] font-bold'>What We do</h3>
      </div>
      <div className='flex items-center gap-8'>
      <div className='grid grid-cols-2 gap-8 mt-2 '>
        {
            serviceData.map((item)=>(
                <div key={item.id} className={` py-[29px] px-[24px] ${item.id==4?'py-[0px] ':''}`}>
                    <Image src={item.img} className={` mb-5${item.id==4 ?'mt-5':''}`} alt=''/>
                    {item.id==4?'': <div className='flex flex-col gap-5 '>
                    <h3 className='text-[20px] leading-[23px] font-semibold'>{item.title}</h3>
                    <p className='text-[#8987A1] text-sm leading-6'>{item.des}</p>
                    </div>}
                </div>
            ))
        }
      </div>
      <div className='grid grid-cols-2 gap-8 mt-8 '>
        {
            serviceRightData.map((item)=>(
                <div key={item.id} className={` px-[24px]  items-start  py-[29px] ${item.id==4?'py-[0px] ':''} ${item.id==3?'mt-0 ':''}`}>
                    <Image src={item.img} className='' alt=''/>
                    {item.id==4?'': <div className={`flex flex-col gap-5 mt-5`}>
                    <h3 className='text-[20px] leading-[23px] font-semibold'>{item.title}</h3>
                    <p className='text-[#8987A1] text-sm leading-6'>{item.des}</p>
                    </div>}
 

                </div>
            ))
        }
      </div>
      </div>

    </div>
  )
}

export default Services
