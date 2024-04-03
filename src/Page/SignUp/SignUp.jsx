import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SignUp = () => {
    const [credential, setCredential]= useState({
        email: undefined,
        password: undefined,
        userName: undefined,
        images: null
    })

    const handleChnage =( e)=>{
  const{id, value}= e.target
        setCredential({...credential, [id]: value})
    }
    const handleImage=(e)=>{
        const file = e.target.files[0]
        console.log(file);
        setCredential({...credential, images: file})
    }




    const navigate = useNavigate()
    //handleClick

    const handleClick = async (e) => {
        e.preventDefault();
        const formData = new FormData()
        formData.append('images', credential.images)
        formData.append('userName', credential.userName)
        formData.append('email', credential.email)
        formData.append('password', credential.password)
      
        try {
          const res = await axios.post('https://naikap-node-api.onrender.com/user', formData);
          console.log(res);
          navigate("/login")

    
        } catch (error) {
          console.log(error);
        }
      };
  return (
    <div className=' h-[100vh] flex justify-center items-center'>
        <form className='flex flex-col gap-5 border border-gray-800 rounded-md px-6  py-4' onSubmit={handleClick}>
    <label htmlFor="">UserName</label>
    <input type="text"  id="userName" onChange={handleChnage}   className=' p-1 border-2 rounded-md'  />
    <label htmlFor="">Email</label>
    <input type="email" id="email" onChange={handleChnage}   className=' p-1 border-2 rounded-md' />
    <label htmlFor="">Password</label>
    <input type="text" id="password" onChange={handleChnage}    className=' p-1 border-2 rounded-md' />
    <label htmlFor="">Image</label>
    <input type="file"  accept='.jpeg, .png, .jpg' id="images" onChange={handleImage} required   className=' p-1 border-2 rounded-md'  />

    <button className=' bg-lime-400 p-2 border rounded-xl' type='submit'>Signin</button>
    <Link to='/login'>   <span className=' px-2 py-1 text-blue-400 rounded-lg'>Already have account?</span></Link>
      </form>
    </div>

  )
}

export default SignUp