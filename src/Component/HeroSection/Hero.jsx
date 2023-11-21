import React, { useState } from 'react'
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';
const Hero = () => {
    const[slideNum, setSlideNum]= useState(0)

    const photos = [
        {src: "https://paradisevilla.com.np/wp-content/uploads/2020/11/BULDING-.png"
    
      },
      {
        src: "https://paradisevilla.com.np/wp-content/uploads/2020/11/1636966995312-scaled.jpg"
      },
    {
      src: "https://paradisevilla.com.np/wp-content/uploads/2020/11/Jacuzzi-2-.png"
    
    },
    
    {
          src: "https://paradisevilla.com.np/wp-content/uploads/2020/11/1.png"
    
      },
    ]

     function hanldeDirection(direction){
      let number
      if(direction==='l'){
         number = slideNum-1
        if(number<0){
           number= photos.length-1
        }

      } else if(direction==='r'){
        number = slideNum+1
       if(number===photos.length){
          number= 0
       }

     }
     setSlideNum(number)
    } 


  return (
    <div className='relative md:relative'>
        <img src={photos[slideNum].src}  className='w-[100vw] h-[88vh] object-fill md:w-[100vw] md:h-[88vh] md:object-fill' alt="" />
        <BsArrowLeftCircle className='absolute top-72 left-1 md:absolute md:top-72 md:left-1 md:text-orange-400 md:hover:cursor-pointer' onClick={()=>hanldeDirection('l')} size={20}/>
        <BsArrowRightCircle className='absolute top-72 right-1 md:absolute md:top-72 md:right-1 md:text-orange-400 md:hover:cursor-pointer' onClick={()=>hanldeDirection('r')} size={20}/>
    </div>
  )
}

export default Hero