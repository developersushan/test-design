import React, { useState } from 'react'
import { accordionData } from '../utils/accordionData'
import AccordionItem from './AccordionItem'
import Image from 'next/image'
import QuestionIcon from '../assets/questions.svg'
const Questions = () => {
    const [open,setOpen] = useState(false)
    const toggle =(index)=>{
        if(index ===open){
            return setOpen(null)
        }
        setOpen(index)
    }
  return (
    <div className='relative'>
        <Image className='absolute -bottom-[170px] left-1' src={QuestionIcon} alt=''/>
      <div className='w-[calc(100%_-_12px)] my-[174px]  xl:w-[1150px] mx-auto flex items-center'>
        <div className='w-[454px]'>
            <h3 className='text-[#252432] text-6xl leading-[72px] font-bold'>Frequently Asked Questions</h3>
        </div>
        <div className='w-[696px]'> 
            {
                accordionData.map((item,index)=>{
                    return(
                        <AccordionItem key={index} open={index ===open} title={item.title} des={item.des} toggle={()=>toggle(index)} />
                    )
                })
            }
        </div>
      </div>
    </div>
  )
}

export default Questions
