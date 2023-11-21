import React from 'react'
import { GiWashingMachine, GiForkKnifeSpoon } from 'react-icons/gi';
import { BsCarFrontFill } from 'react-icons/bs';
import { FaPlaneDeparture, FaWifi, FaShower, FaLinkedin } from 'react-icons/fa';


const About = () => {
  return (
    <>
    <div className='flex flex-col p-4 md:flex-row justify-evenly md:mt-14 md:mb-16 md:items-center md:gap-4 md:max-w-[1340px] md:mx-auto md:p-4  max-h-[1340px]'>
    <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/94/db/a9/restaurant.jpg?w=700&h=-1&s=1" className='w-full md:max-w-[40%] max-h-[300px]' alt="" />
    <div className='w-full flex flex-col px-4 gap-7 md:flex md:flex-col md:items-center md:gap-7'>

          <h1 className=' text-center pt-1 text-2xl md:text-2xl font-extrabold font-serif'>About Naikap Village</h1>
          <span className=' text-2xl font-light'>Naikap Village Resort | Great Location  | Warm Hospitality</span>
          <p className=' text-lg font-thin'>Whether you are in Nepal for personal reasons or on business, Oasis Hotel is the ideal choice. The oasis will take care of you; whether it’s during your stay with us or before and after! Enjoy the comfort, thoughtful touches, and personalized service at the oasis and feel at home like never before!</p>
       
       
        </div>
       
    </div>
    </>
  )
}

export default About