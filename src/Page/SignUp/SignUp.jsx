import axios from 'axios'
import React, { useState } from 'react'

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
    console.log(credential);


    const handleClick = async (e) => {
        e.preventDefault();
        const formData = new FormData()
        formData.append('images', credential.images)
        formData.append('userName', credential.userName)
        formData.append('email', credential.email)
        formData.append('password', credential.password)
      
        try {
          const res = await axios.post('/user', formData);
          console.log(res);
    
        } catch (error) {
          console.log(error);
        }
      };
  return (
    <div><label htmlFor="">Email</label>
    <input type="email" id="email" onChange={handleChnage}  className='border border-black' />
    <label htmlFor="">Email</label>
    <input type="text" id="userName" onChange={handleChnage}  className='border border-black' />
    <label htmlFor="">Password</label>
    <input type="text" id="password" onChange={handleChnage}   className='border border-black' />
    <label htmlFor="">Image</label>
    <input type="file"  accept='.jpeg, .png, .jpg' id="images" onChange={handleImage}   className='border border-black' />

<button onClick={handleClick}>Button</button></div>
  )
}

export default SignUp