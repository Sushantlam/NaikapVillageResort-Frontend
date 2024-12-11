import React from 'react'
import { GiWashingMachine, GiForkKnifeSpoon } from 'react-icons/gi';
import { BsCarFrontFill } from 'react-icons/bs';
import { FaPlaneDeparture, FaWifi, FaShower, FaLinkedin } from 'react-icons/fa';


const Facilities = () => {
  return (
    <>
    <div className='flex flex-col md:flex-row-reverse md:mt-14 justify-evenly items-center gap-1 max-w-[1340px]  mx-auto p-4 max-h-[1340px]'>
    <img src="/Com.webp" className='w-full md:max-w-[40%] max-h-[300px] hover:scale-130' alt="" />
    <div className='w-full flex flex-col px-4  md:max-w-[50%] md:flex md:flex-col items-center gap-7'>

          <h1 className=' text-center text-2xl md:text-2xl font-extrabold font-serif'>Our Hotel Facilities</h1>
          <span className=' text-2xl font-light'>Naikap Village Resort | Great Location  | Warm Hospitality</span>
          <p className=' text-lg font-thin'>Whether you are in Nepal for personal reasons or on business, Oasis Hotel is the ideal choice. The oasis will take care of you; whether it’s during your stay with us or before and after! Enjoy the comfort, thoughtful touches, and personalized service at the oasis and feel at home like never before!</p>
       <div className=' grid grid-cols-3 gap-4 w-full md:flex md:gap-14 md:justify-between md:items-center'>
       <FaWifi size={50} className='decoration-blue-400 text-green-500' />
<BsCarFrontFill size={50} className='decoration-blue-400 text-green-500' />
<FaShower size={50} className='decoration-blue-400 text-green-500' />
<GiForkKnifeSpoon size={50} className='decoration-blue-400 text-green-500' />
<FaPlaneDeparture size={50} className='decoration-blue-400 text-green-500' />
<GiWashingMachine size={50} className='decoration-blue-400 text-green-500' />


      
       </div>
       
        </div>
       
    </div>
    </>
  )
}

export default Facilities