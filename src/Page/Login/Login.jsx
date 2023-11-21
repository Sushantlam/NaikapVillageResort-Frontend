import React, { useContext, useState } from 'react'
import { AuthContext } from '../../UseContext/Auth'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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

const hanldeClick =async(e)=>{
    e.preventDefault()
   dispatch({type:'Login_Start'})
   try {
    const res = await axios.post('/user/login', credential)
    console.log('Login_Start', res);
    dispatch({type:'Login_Success', payload: res.data.details})
    navigate("/")
    
   } 
   catch (error) {
    
     dispatch({ type: "Login_Fail", payload: error.response.data })
     navigate("/login")
   }
      }
    
  return (
    <div>

        
            <label htmlFor="">Email</label>
               <input type="text" id="email" onChange={handleChnage}  className='border border-black' />
               <label htmlFor="">Password</label>
               <input type="text" id="password" onChange={handleChnage}   className='border border-black' />

           <button onClick={hanldeClick}>Button</button>
       
{error  && <p>{error}</p> }
    </div>
  )
}

export default Login