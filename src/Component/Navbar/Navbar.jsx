import React, { useContext, useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { IoLocationSharp } from 'react-icons/io5';
import { MdLocalPhone, MdEmail } from 'react-icons/md';
import { FaFacebookSquare, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../UseContext/Auth';
const Navbar = () => {

  const {email, dispatch, error}= useContext(AuthContext)
  console.log(email);
  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }

  const [drop, setDrop] = useState(false)
  const dropDown = () => {
    setDrop(!drop)
  }
  const navigate = useNavigate()
  function logOut(){
    try {
      dispatch({ type: "Log_Out" })
      navigate("/login")
     
    
    } catch (error) {
        console.log();

    }
  }


  return (
    <>
      <div className=' sticky top-0 z-50 bg-white'>
        <div className='hidden md:flex justify-between items-center h-4 max-w-[1340px] mx-auto p-6 text-black'>
          <div className='flex justify-between items-center gap-2  z-50 '>
            <IoLocationSharp size={20} />
            <p className='text-sm'>Suchyatar, Kalanki</p>
            <MdLocalPhone size={20} />
            <p className='text-sm'>+977-9813481120</p>
            <MdEmail size={20} />
            <p className='text-sm'>sushantlama732@gmail.com</p>

          </div>
          <ul className='flex justify-between items-center gap-2'>
            <FaFacebookSquare size={20} />
            <FaInstagram size={20} />
            <FaTwitter size={20} />
            <FaLinkedin size={20} />



          </ul>
        </div>
        <div className='w-full bg-green-85bc22 overflow-hidden '>
          <div className='  flex justify-between items-center w-full md:justify-between md:items-center md:h-16 md:w-auto md:mx-auto md:px-4 md:text-white lg:justify-between lg:items-center lg:h-16 lg:max-w-[1340px] lg:mx-auto lg:px-4 '>


          <Link to='/'>  <h1 className='text-2xl font-bold text-black'>Lama.</h1></Link>
            <ul className='hidden md:flex'>
             <Link to='/room'> <li className='p-3'>Room</li></Link>
             <Link to='/things'> <li className='p-3'>Things To Do</li></Link>
              <Link to='/gallery'> <li className='p-3'>Gallery</li></Link>
              <Link to='/contactus'> <li className='p-3'>Contact Us</li></Link>
               <li className='p-3'>About Us</li>

            {email ? <div className=' h-9 w-9 rounded-full relative'>
              <img src={email?.images?.url} onClick={dropDown} className=' cursor-pointer h-[100%] w-[100%] flex justify-center items-center rounded-full' alt="" />
            
            
            </div>: <div className=' flex gap-2 justify-between items-center'>
            <Link to='/login'>   <button className='bg-black px-2 py-1 text-white rounded-lg' >Login</button></Link>
            <Link to='/signup'>   <button className='bg-white px-2 py-1 text-black rounded-lg'>Signup</button></Link>
            </div> }
              {email &&  <li className='py-2 ml-2 px-1 bg-red-600 rounded-lg cursor-pointer' onClick={logOut}>Log Out</li>}

              

            </ul>

            <div onClick={handleNav} className=' flex gap-2 justify-center items-center pr-3  md:hidden lg:hidden'>
           
              {nav ? <AiOutlineClose size={20} /> : < AiOutlineMenu size={20} />}
             
            </div>

            <ul className={nav ? 'fixed left-0 top-0 w-[80%] pt-16 pl-10  z-50 h-full bg-green-85bc22 border-r border-r-gray-900 ease-in-out duration-100' : 'ease-in-out duration-100 fixed left-[-100%]'}>
            <Link to='/'>  <h1 className='text-2xl font-bold  text-[#00df9a]'>Lama.</h1></Link>
            <Link to='/room'> <li className='p-3'>Room</li></Link>
            <Link to='/things'> <li className='p-3'>Things to do</li></Link>
            <Link to='/gallery'> <li className='p-3'>Gallery</li></Link>
            <Link to='/contactus'> <li className='p-3'>About Us</li></Link>
            <Link to='/about'> <li className='p-3'>Contact Us</li></Link>
            <li className='p-3' onClick={logOut}>Log Out</li>
            

            </ul>

          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar