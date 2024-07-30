import React from 'react'
import Ellipse1 from  '../assets/Ellipse1.png'
import Ellipse2 from  '../assets/Ellipse2.png'
import Ellipse3 from  '../assets/Ellipse3.png'
import Ellipse4 from  '../assets/Ellipse4.png'
import Ellipse5 from  '../assets/Ellipse5.png'
import Star from  '../assets/Star2.png'
import Image from 'next/image'
const Review = () => {
    const data =[
        {
            id:1,
            img:Ellipse1,
        },
        {
            id:2,
            img:Ellipse2,
        },
        {
            id:3,
            img:Ellipse3,
        },
        {
            id:4,
            img:Ellipse4,
        },
        {
            id:5,
            img:Ellipse5,
        },

    ]
    const starData =[
        {
            id:1,
            star:Star
        },
        {
            id:2,
            star:Star
        },
        {
            id:3,
            star:Star
        },
        {
            id:4,
            star:Star
        },  
              {
            id:5,
            star:Star
        },
    ]
  return (
    <div className='w-[calc(100%_-_12px)] xl:w-[1260px] mx-auto my-[86px]'>
      <div className='flex justify-center gap-3 w-[400px] mx-auto'>
        <div className='flex'>
            {
                data.map((item)=>(
                    <Image width='auto' height='auto' key={item.id}  className='-ml-[11px]' src={item.img} alt=''/>
                ))
            }
        </div>
        <div className='flex flex-col gap-1'>
            <h3 className='text-base font-normal leading-[19px] text-[#8987A1]'><span className='text-base font-semibold leading-[19px] text-[#252432]'>5.0</span> Based on <span className='text-base font-semibold leading-[19px] text-[#252432]'>145</span> Reviews</h3>
            <div className='flex gap-1'>
                {
                    starData.map((item)=>(
                        <Image width='auto' height='auto' key={item.id} src={item.star} alt=''/>
                    ))
                }
            </div>
           
        </div>
      </div>
    </div>
  )
}

export default Review
