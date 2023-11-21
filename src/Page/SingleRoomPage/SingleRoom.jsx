import React, { useState } from 'react'
import Navbar from '../../Component/Navbar/Navbar'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css';
import { DateRange } from 'react-date-range';
import { format, subDays } from 'date-fns';
import { ImCalendar } from "react-icons/im"
import { useLocation } from 'react-router-dom';
import useFetch from '../../hooks/useFetch'
import { GiWashingMachine, GiForkKnifeSpoon } from 'react-icons/gi';
import { BsCarFrontFill } from 'react-icons/bs';
import Footer from '../../Component/Footer/Footer'
import { FaPlaneDeparture, FaWifi, FaShower, FaLinkedin } from 'react-icons/fa';
import Reserve from '../Reserve/Reserve';
const SingleRoom = () => {
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ])
    // console.log('selection', date);
    const location = useLocation()
 
    //
    function daysDifference(date1, date2){
        const daysInMiliSecond =Math.abs( date2?.getTime()- date1?.getTime())//abs le chae positive value dincha 
        const miliSecond = 1000 * 3600 * 24
        const timeDiff = Math.ceil(daysInMiliSecond/ miliSecond)
       
        return timeDiff
        // console.log('selection',daysInMiliSecond);
      }
     let days = daysDifference(date[0].endDate, date[0].startDate)
    

const handleClick=()=>{
    setOpenModel(!openModel)
}
    

    const id = location.pathname.split("/")[2]
 
    const { data, error, loading } = useFetch(`https://naikap-node-api.onrender.com/room/find/${id}`)
     

    const [openCalendar, setOpenCalendar] = useState(false)
    const [openModel, setOpenModel] = useState(false)
    const [open, setOpen] = useState(false)
    const roomNumberId = data?.roomById?.rooms
  
    const [Option, setOption]= useState({
        adult: 1,
        children:0
    })

    function handleSumbit(name, operation){
            setOption((prev)=>{
                return {...prev, [name]: operation==="d"? Option[name]-1  : Option[name]+1}
            })
           
    }

   
 
    return (
        <>
            <Navbar />

            <div className='w-full'>
            <div className='flex flex-col justify-between gap-8 md:flex-row md:max-w-[1340px] md:justify-between md:mx-auto md:gap-7 md:mt-8 text-black h-[60vh]'>
                <img src={data?.roomById?.images?.url} className=' md:flex md:w-[75%] md:object-cover' alt="" />

                <div className='flex flex-col justify-center gap-4 p-8 mx-6 bg-gray-200   md:flex-col md:gap-3 md:bg-gray-200 md:text-black md:w-[25%] md:py-8 md:px-4'>
                    <h3 className='text-base text-center font-semibold'>Starting room from</h3>
                    <h5 className='text-3xl text-center font-semibold'>Rs.{data?.roomById?.price}.00</h5>
                    <p className='text-base text-center font-semibold'>/night</p>
                    <hr className='border border-gray-300' />
                    <span className='font-semibold'>Choose your Date</span>
                    <span className='bg-white text-black p-2 flex justify-between items-center rounded' onClick={() => setOpenCalendar(!openCalendar)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`} <ImCalendar className='icons' /></span>

                    {openCalendar && <DateRange
                        editableDateInputs={true}
                        onChange={item => setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                        minDate={new Date()}
                        className='w-[100%]'
                    />}
                    <span className='font-semibold'>Person</span>
                    <div className='flex justify-between'>
                        <span>Adult</span>
                        <div className='flex justify-between gap-2'>
                        <button className=' px-2 rounded border border-gray-400 hover:cursor-pointer' onClick={()=>handleSumbit('adult', 'd')} disabled={Option.adult <= 1}>-</button>
                        <span>{Option.adult}</span>
                         <button className='px-2 rounded border border-gray-400 hover:cursor-pointer' onClick={()=>handleSumbit('adult', 'i')}>+</button>
                         </div>
                    </div>
                    <div className='flex justify-between'>
                        <span>Children</span>
                        <div className='flex justify-between gap-2'>
                        <button className='px-2 rounded border border-gray-400 hover:cursor-pointer' onClick={()=>handleSumbit('children', 'd')} disabled={Option.children <= 0}>-</button>
                        <span>{Option.children}</span>
                         <button className='px-2 rounded border border-gray-400 hover:cursor-pointer' onClick={()=>handleSumbit('children', 'i')}>+</button>
                         </div>
                    </div>
                        
                   
                    <button className='bg-green-85bc22 p-2 rounded hover:bg-white hover:transition hover:delay-150 hover:ease-in-out' onClick={handleClick}>Book Now</button>
                </div>
            </div>
            <div className=' w:full mt-48 md:flex md:max-w-[1340px] md:justify-between md:mx-auto md:gap-7 md:mt-8'>
                <hr className='border border-gray-300 w-full' />


            </div>

            <div className='flex flex-col gap-3 justify-center items-center mt-64 w:full md:flex-row md:max-w-[1340px]  md:justify-between md:mt-8 md:mx-auto md:gap-7 '>
                <div className='flex flex-col gap-3 px-3 w:full md:flex-col md:w-[75%] md:justify-between md:mx-auto   text-black'>
                    <div className='flex flex-row gap-3 md:flex-row md:justify-between md:gap:3 md:items-center md:w-[90%]'>
                        <FaWifi size={50} className='decoration-blue-400 text-green-500' />
                        <BsCarFrontFill size={50} className='decoration-blue-400 text-green-500' />
                        <FaShower size={50} className='decoration-blue-400 text-green-500' />
                        <GiForkKnifeSpoon size={50} className='decoration-blue-400 text-green-500' />
                        <FaPlaneDeparture size={50} className='decoration-blue-400 text-green-500' />
                        <GiWashingMachine size={50} className='decoration-blue-400 text-green-500' />

                    </div>

                    <span>{data?.roomById?.desc}</span>
                    {/* <span></span> */}

                </div>
                <div className='flex flex-col gap-3 p-4 h-full bg-gray-200 mx-3 md:rounded-lg md:flex-col md:justify-center md:gap-1  md:bg-gray-200 rounded-lg md:w-[25%] md:min-h-[200px] md:p-4'>
               
                <span className='text-xl'>For {days > 0 ? days: days=1} day</span>
                <span className=' font-bold text-2xl'>Rs.{ data?.roomById?.price * days}</span>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi natus inventore similique magni maiores labore sunt explicabo non nesciunt eos?</span>

                </div>

              

            </div>
            </div>
           {openModel && <Reserve setOpen = {setOpenModel} time={date} hotelId={id}/>}
            <Footer/>
        </>
    )
}

export default SingleRoom