import React from 'react'
import Navbar from '../../Component/Navbar/Navbar'
import Footer from '../../Component/Footer/Footer'
import useFetch from '../../hooks/useFetch'
import { Link, useNavigate } from 'react-router-dom'
const Room = () => {

  const {data, loading, error}= useFetch("https://naikap-node-api.onrender.com/room")
  console.log(data);
  return (
    <>
    <Navbar/>
    <h3 className='uppercase text-2xl text-center font-semibold p-8'>Rooms and rate</h3>
   {data?.getAllRoom?.map((element,index)=>{
    console.log('uppercase text-2xl text-center font-semibold p-8',index);
    return (<>
    <div key={index} className='flex flex-col relative mb-10 md:flex-row md:relative justify-evenly md:mt-6 md:mb-4 md:items-center md:gap-6 md:max-w-[1340px] md:mx-auto  overflow-hidden'>
    <img src={element.images.url} className='w-full md: hover:bg-black bg-opacity-50 md:max-w-[100%] max-h-[350px] object-cover overflow-hidden' alt="" />
    
    <div className={`absolute top-0 left-0 bg-black bg-opacity-50 flex flex-col gap-2 py-10 px-3  md:flex md:flex-col md:gap-3 md:z-40 md:bg-black md:bg-opacity-50 md:h-[100%] md:top-0 ${index % 2 === 0 ? 'md:left-0':'md:right-0'}   md:py-4 md:overflow-hidden md:px-16 md:absolute md:max-w-[500px]`}>
  <h3 className='text-base font-extrabold text-white uppercase md:uppercase md hover:text-green-85bc22 md:text-2xl md:font-extrabold md:text-white'>{element.title}</h3>
      <h5 className='text-sm font-light text-yellow-300 font-serif md:text-base md:font-light md:text-yellow-300 md:font-serif'>START FORM RS.{element.price} PER DAY</h5>
      <p className='text-xs text-white md:text-base md:text-white'>{element.desc}</p>
      <Link to={`/room/${element._id}`}><button className='bg-green-85bc22 p-2 md:p-2 md:bg-green-85bc22' >View Details</button></Link>
    
    </div>
       
    </div></>)
   }) }

   
    <Footer/>
    </>
  )
}

export default Room