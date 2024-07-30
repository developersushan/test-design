import React from 'react'
import { Collapse } from 'react-collapse';
import { FiPlus,FiMinus } from "react-icons/fi";
const AccordionItem = ({open,toggle,title,des}) => {
  return (
    <div className='py-6 px-[17px]'>
      <div onClick={toggle} className='flex items-center cursor-pointer justify-between'>
        <h4 className='text-[18px] text-[#252432] leading-[21px] font-bold'>{title}</h4>
        {open?<FiMinus />:<FiPlus />}
      </div >
      <Collapse isOpened={open}>
      <p className='text-[#8987A1] pt-4 text-base font-normal leading-6'>{des}</p>
      </Collapse>
    </div>
  )
}

export default AccordionItem
