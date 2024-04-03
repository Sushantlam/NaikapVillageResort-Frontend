import React, { useContext, useState } from 'react'
import { AuthContext } from '../../UseContext/Auth'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

    const {email, dispatch, error}= useContext(AuthContext)
    // console.log('email', email);
    const[credential,setData]=useState({
        email: undefined,
        password: undefined
    })
   
    const navigate = useNavigate()

      const handleChnage=(e)=>{
        const {id, value}= e.target
        setData({...credential, [id]: value})
        // console.log(data);
      }
    //   console.log(data);

const handleClick =async(e)=>{
    e.preventDefault()
   dispatch({type:'Login_Start'})
   try {
    const res = await axios.post('https://naikap-node-api.onrender.com/user/login', credential)
    console.log('Login_Start', res);
    dispatch({type:'Login_Success', payload: res.data.details})
    navigate("/")
    
   } 
   catch (error) {

    console.log(error);
    
     dispatch({ type: "Login_Fail", payload: error.response.data })
     navigate("/login")
   }
      }
    
  return (
    <div className=' h-[100vh] flex justify-center items-center'>
    <form className='flex flex-col gap-5 border border-gray-800 rounded-md px-6  py-4' onSubmit={handleClick}>
            <label htmlFor="">Email</label>
               <input  type="text" id="email" onChange={handleChnage}  className=' p-1 border-2 rounded-md'  />
               <label htmlFor="">Password</label>
               <input type="text" id="password" onChange={handleChnage}    className=' p-1 border-2 rounded-md'  />

          
       
{error  && <p className=' text-red-600'>{error}</p> }
<button className=' bg-lime-400 p-2 border rounded-xl' type='submit'>Login</button>
<Link to='/signup'>   <span className=' px-2 py-1 text-blue-600 rounded-lg'>Dont have account? Sign Up</span></Link>
   
      </form>
    </div>
  )
}

export default Login