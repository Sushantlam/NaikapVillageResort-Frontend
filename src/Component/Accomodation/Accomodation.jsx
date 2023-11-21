import React from 'react';
import { Link, useNavigate } from 'react-router-dom'

const Accommodation = () => {
  return (
    <>
      <h4 className='text-center text-3xl font-bold mt-10 text-gray-400'>Accommodation</h4>
      <div className='flex flex-col md:flex-row  justify-center items-center mt-12 max-w-[1340px] mx-auto gap-5 hover:cursor-pointer'>
      <div className='flex justify-center items-center flex-col gap-5 max-w-[300px] md:min-w-[350px] z-10 h-[350px] relative'>
        <img src="https://paradisevilla.com.np/wp-content/uploads/2020/12/DSC03705-scaled.jpg" className='h-[100%] opacity-100' alt="" srcset="" />
        <div className='flex justify-center items-center flex-col gap-5 max-w-[300px] md:max-w-[350px]  text-white font-medium bg-green-85bc22 ease-in-out duration-150 opacity-0 min-h-[350px] absolute  hover:opacity-100 ease-in left-0 z-50 '>
          <h3 className='uppercase text-2xl'>Deluxe Room</h3>
          <p className='uppercase'>Start from Rs. 5500 per day</p>
          <span className=' ml-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda alias labore quo cumque est, quae totam saepe sit. Perferendis, eos! Numquam nostrum vitae similique earum omnis debitis nihil neque totam?
          </span>
          <Link to='/room'> <button className=' p-2 border-2 border-gray-200 hover:border-none ease-in-out duration-500'>View Details</button></Link>
       </div>
        </div>
        <div className='flex justify-center items-center flex-col gap-5 max-w-[300px] md:min-w-[350px] z-10 h-[350px] relative'>
        <img src="https://cdn1.goibibo.com/voy_mmt_ext/t_srp/htl-imgs/20160721042018735-058a2e77_z.jpg?im=Resize=(280,188)" className='h-[100%] opacity-100' alt="" srcset="" />
        <div className='flex justify-center items-center flex-col gap-5 max-w-[300px] md:max-w-[350px]  text-white font-medium bg-green-85bc22 ease-in-out duration-150 opacity-0 min-h-[350px] absolute  hover:opacity-100 ease-in left-0 z-50 '>
          <h3 className='uppercase text-2xl'> Super Deluxe Room</h3>
          <p className='uppercase'>Start from Rs. 5500 per day</p>
          <span className=' ml-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda alias labore quo cumque est, quae totam saepe sit. Perferendis, eos! Numquam nostrum vitae similique earum omnis debitis nihil neque totam?
          </span>
          <Link to='/room'> <button className=' p-2 border-2 border-gray-200 hover:border-none ease-in-out duration-500'>View Details</button></Link>
       </div>
        </div>
        <div className='flex justify-center items-center flex-col gap-5 max-w-[300px] md:min-w-[350px] z-10 h-[350px] relative'>
        <img src="https://paradisevilla.com.np/wp-content/uploads/2020/12/DSC03705-scaled.jpg" className='h-[100%] opacity-100' alt="" srcset="" />
        <div className='flex justify-center items-center flex-col gap-5 max-w-[300px] md:max-w-[350px]  text-white font-medium bg-green-85bc22 ease-in-out duration-150 opacity-0 min-h-[350px] absolute  hover:opacity-100 ease-in left-0 z-50 '>
          <h3 className='uppercase text-2xl'>Suite Room</h3>
          <p className='uppercase'>Start from Rs. 5500 per day</p>
          <span className=' ml-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda alias labore quo cumque est, quae totam saepe sit. Perferendis, eos! Numquam nostrum vitae similique earum omnis debitis nihil neque totam?
          </span>
          <Link to='/room'> <button className=' p-2 border-2 border-gray-200 hover:border-none ease-in-out duration-500'>View Details</button></Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Accommodation;
