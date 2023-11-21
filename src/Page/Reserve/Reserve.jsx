import React, { useState } from 'react'
import useFetch from '../../hooks/useFetch'
import axios from 'axios'
import { ImCross } from 'react-icons/im';
import { useNavigate } from 'react-router-dom';


const Reserve = ({ hotelId, time, setOpen }) => {
    const navigate = useNavigate()
    const { data, error, loading } = useFetch(`https://naikap-node-api.onrender.com/room/find/roomNumber/${hotelId}`)

 const [selectedRoom, setSelectedRoom]= useState([])
    const handleChange=(e)=>{
        const checked = e.target.checked
        const value = e.target.value

        setSelectedRoom(checked?[...selectedRoom, value]: selectedRoom.filter((item)=> item!==value))
    }
    console.log(selectedRoom);

 function getsDateInRange(startDate, endDate){
    const start = new Date(startDate) //yesle start Date choose garcha like November 14 bata basne ho
    const end = new Date(endDate)
     
    const currentDate= new Date(start.getTime()) 
  
    const dates=[]

      while(currentDate <= end){
        //yesma k vako vanda kheri
        //1st ma current Date suppose 19 cha vaney ra end 23 cha vaney 1st ma date 19 huncha loop ma jancha compare garcha ani date ma push garcha 
        //ani tya bata currentDate+1 garcha jun chae (19+1) and so on

        dates.push(new Date(currentDate).getTime())
       
        currentDate.setDate(currentDate.getDate()+1)
       
      }
      return dates
 }
 const allDates=getsDateInRange(time[0].startDate, time[0].endDate)

 function isAvailable(roomNum){
    const isFound = roomNum.unavailableDate.some((existingDate)=>
    allDates.includes(new Date(existingDate).getTime()))
   
    return !isFound

 }

 async function handleReserve(){
    try {
        await Promise.all(selectedRoom.map(async(roomId)=>{
            const res = await axios.put(`https://naikap-node-api.onrender.com/roomNumber/update/${roomId}`, {din: allDates})
            console.log(res);
            if(res.status===201){
                navigate("/thankyou")
            }
        }))
    } catch (error) {
        console.log(error);
    }

 }

 
//  console.log('dates',allDates);
    return (
        <div className='flex justify-center items-center w-[100vw] h-[100vh] bg-black bg-opacity-50 fixed top-0 left-0 '>
            <div className='flex flex-col gap-3 bg-white z-50 p-[40px] relative '>
            <ImCross
          
          className=" absolute -top-3 text-gray-500 -right-3 z-50 hover:cursor-pointer"
          onClick={() => setOpen(false)}
        />
                <h3 className=' font-extrabold text-xl'>Choose your room</h3>
                {data?.list?.map((e) => {
                    return (<>
                        <div className='flex  justify-center items-center gap-6  relative '>
                            <div className='flex flex-col justify-between  gap-2'>
                            <span>Bed Type:{e.bedType}</span>
                            <span>Max Peopple:{e.maxPeople}</span>
                            <span>Bathroom: {e.bathroom}</span>
                            </div>
                            {e?.roomsNumber?.map((roomNum) => {
                                // console.log("room", roomNum);
                                return (<div className="flex gap-1 justify-center" key={roomNum._id} >

                                    <label >{roomNum.number}</label>
                                    <input type="checkbox" value={roomNum._id} onChange={handleChange} disabled={!isAvailable(roomNum)}/>
                                </div>
                                )
                            })
                            }
                          
                        </div>
                    </>

                    )
                })}
                  <button onClick={handleReserve} className='bg-green-85bc22 text-lg font-semibold p-3 rounded' >Button</button>
            </div>
        </div>
    )
}

export default Reserve