import React from 'react'
import Slider from '../hooks/Slider'
import LeftArrowBtn from '../hooks/LeftArrowBtn'
import RightArrowBtn from '../hooks/RightArrowBtn'
const CheckWork = () => {
  return (
    <div className=''>
      <div className='w-[calc(100%_-_12px)] xl:w-[1260px] mx-auto mt-[100px]'>
      <div className='check-banner mx-auto h-[300px] flex justify-center items-center text-center '>
          <div className='w-[987px]  mx-auto flex  justify-between items-center '>
           <LeftArrowBtn/>
            <div className=' flex flex-col gap-[32px]'>
            <h3 className='text-[#252432] text-6xl leading-[72px] font-bold'>Check our Work</h3>
            <p className='text-[#8987A1] text-sm leading-[21px] font-normal w-[450px]'>Take a look at some of our recent projects to see how we've helped businesses like yours succeed online.</p>
            </div>
            <RightArrowBtn/>
          </div>
        </div>
      </div>
<Slider/>
      
    </div>
  )
}

export default CheckWork
