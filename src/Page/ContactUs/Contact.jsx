import React, { useState } from 'react'
import Navbar from '../../Component/Navbar/Navbar'
import { MdLocalPhone, MdEmail } from 'react-icons/md';
import { FaLocationArrow } from 'react-icons/fa';
import Footer from '../../Component/Footer/Footer';
import axios from 'axios';
const Contact = () => {

  const [data, setData]= useState({
    email:'',
    fullname:'',
    subject:'',
    textarea:''
  })

  const hanldeChnage=(e)=>{
    const {id, value}= e.target
    setData({...data, [id]: value})

  }
  console.log(data);
  const handleSumbit=async(e)=>{
   try {
    const res = await axios.post("/email", data)
    if(res.status===200){
      setData({
        email:'',
        fullname:'',
        subject:'',
        textarea:''
      })
    }
   } catch (error) {
    console.log(error);
   }

  }
 
  return (
    <>
     <Navbar/>
     <h3 className='uppercase text-2xl text-center font-semibold p-8'>Contact us</h3>
     <div className='flex flex-col gap-4 md:flex-row md:justify-between md:items-center md:max-w-[1340px] md:gap-4 md:mx-auto md:p-4'>
      <div className='flex flex-col max-w-[400px] h-[200px] justify-center items-center gap-3 border rounded border-gray-200 px-10 shadow-slate-50 py-5'>
      <MdLocalPhone size={50} />
      <h3 className=' font-extrabold'>Phone</h3>
      <p>A wonderful serenity has taken possession of my entire soul, like these.</p>
       <p className=' font-semibold'>+977-9813481120</p>
       
      </div>
      <div className='flex flex-col max-w-[400px] h-[200px] justify-center items-center gap-3 border rounded border-gray-200 px-10 shadow-slate-50 py-5'>
      <MdEmail size={50} />
      <h3 className=' font-extrabold'>Email</h3>
      <p>A wonderful serenity has taken possession of my entire soul, like these.</p>
       <p className='font-semibold'>info@naikapvillageresort.com</p>
       
      </div>
      <div className='flex flex-col max-w-[400px] h-[200px] justify-center items-center gap-3 border rounded border-gray-200 px-10 shadow-slate-50 py-5'>
      <FaLocationArrow size={20} />
      <h3 className=' font-extrabold'>Location</h3>
      <p>Naikap Village Resort, Kalanki, 44600 </p>
      <p>Kathmandu, Nepal</p>
      
       
      </div>
     </div>
     <h3 className=' mt-5 text-center text-4xl font-semibold'>Leave us your info</h3>
     <h5 className='text-center text-lg text-gray-600 mt-4'>and we will get back to you.</h5>
     <div className='w-full mt-7 flex justify-center items-center '>
     <div className='flex flex-col gap-4 px-4 mb-5 md:py-10 md:px-10 md:flex md:flex-col md:justify-center w-full md:items-center md:gap-4 md:max-w-[600px]'>
      <div className='flex flex-col gap-4 md:w-full md:flex md:flex-row md:gap-2 justify-center items-center '>
        <input type="text" placeholder='Your Name*' id='fullname'  value={data.fullname} onChange={hanldeChnage} className='w-full border h-8 border-gray-3 md:border md:h-8 md:pl-2 md:border-gray-300 md:w-[50%]' />
        <input type="email" placeholder='Your Email*  ' id='email' value={data.email} onChange={hanldeChnage} className='w-full border h-8 border-gray-3 md:border md:h-8 md:pl-2 md:border-gray-300 md:w-[50%]' />
      </div>
      <input type="About" placeholder='Subject*' id='subject' value={data.subject} onChange={hanldeChnage} className='border h-8 pl-2 border-gray-300 w-full' />
        <textarea type="text" placeholder='Message*' id='textarea' value={data.textarea} onChange={hanldeChnage} className='border h-24 pl-2 border-gray-300 w-full'/>
      <button className='flex items-center justify-center rounded-lg h-9 bg-green-85bc22 p-5 ' onClick={handleSumbit}>Submit Now</button>
      </div>
     </div>
     <Footer/>
    </>
  )
}

export default Contact