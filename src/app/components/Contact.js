import React, { useState } from 'react'
import SlideIcon from '../assets/contact.svg'
import LeftIcon from '../assets/footer.svg'
import Image from 'next/image'
import Vector2 from '../assets/FooterVector1.svg'
import Vector3 from '../assets/FooterVector1.png'
import Vector1 from '../assets/FooterVector.svg'
const Contact = () => {
    const [inputField ,setInputField] = useState({
        name:"",
        email:"",
        message:""
    })

    const handleChange =(e)=>{
        const {name,value} = e.target
        setInputField((prev)=>{
            return{
                ...prev,
                [name]:value
            }
        })
    }
    const handleFrom =(e)=>{
        e.preventDefault()
        console.log(inputField)
    }
  return (
    <div className='mt-[124px] mb-[163px] relative'>
        <Image width='auto' height='auto' className='absolute top-0 right-0' src={SlideIcon} alt=''/>
        <Image width='auto' height='auto' className='absolute -bottom-[200px] left-0' src={LeftIcon} alt=''/>
      <div className='w-[calc(100%_-_12px)]  xl:w-[700px] mx-auto'>
        <h3 className='text-[#252432] text-6xl font-bold leading-[72px]'>Let’s Get in Touch</h3>
        <form onSubmit={handleFrom} className='mt-[64px] flex flex-col gap-[19px] z-50' action="">
            <div className='w-full flex flex-col gap-[10px]'>
                <label className='text-[#252432] font-bold text-[18px] leading-[21px]' htmlFor="#">Email</label>
                <input type="email" name='email' onChange={handleChange} className='w-full  py-5 px-[32px] outline-none border rounded-[1px] border-[#D6DDED]' placeholder='example@email.com' />
            </div>
            <div className='w-full flex flex-col gap-[10px]'>
                <label className='text-[#252432] font-bold text-[18px] leading-[21px]' htmlFor="#">Name</label>
                <input type="text" name='name' onChange={handleChange} className='w-full  py-5 px-[32px] outline-none border rounded-[1px] border-[#D6DDED]' placeholder='Enter your name' />
            </div>
            <div className='w-full flex flex-col gap-[10px]'>
                <label className='text-[#252432] font-bold text-[18px] leading-[21px]' htmlFor="#">Message</label>
                <textarea name="message" id="" cols={6} rows={8}  onChange={handleChange} className='w-full  py-5 px-[32px] outline-none border rounded-[1px] border-[#D6DDED]' placeholder='write your message.....' ></textarea>
            </div>
            <button type='submit' className='text-base leading-6 bg-[#4E47FF] font-bold px-[97px] rounded-[10px] text-white py-[18px]'>Get in Touch</button>
        </form>
      </div>
      <Image width='auto' height='auto' className='absolute top-[16.5rem] left-0 -z-10' src={Vector2} alt=''/>
      <Image width='auto' height='auto' className='absolute top-[16.5rem] left-0 -z-10' src={Vector2} alt=''/>
      <Image width='auto' height='auto' className='absolute top-[33px] right-0  -z-10' src={Vector1} alt=''/>
      <Image width='auto' height='auto' className='absolute top-[6px] right-0  -z-10' src={Vector3} alt=''/>
    </div>
  )
}

export default Contact
