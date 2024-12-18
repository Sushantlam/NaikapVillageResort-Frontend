import React, { useContext, useState } from 'react'
import useFetch from '../../hooks/useFetch'
import axios from 'axios'
import { ImCross } from 'react-icons/im';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../UseContext/Auth';


const Reserve = ({ hotelId, time, setOpen }) => {
    const navigate = useNavigate()
    const { data, error, loading } = useFetch(`https://naikap-node-api.onrender.com/room/find/roomNumber/${hotelId}`)
    const [isLoading, setIsLoading] = useState(false);
    const {email, dispatch, }= useContext(AuthContext)
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

 
 async function handleReserve() {
    setIsLoading(true); // Set loading to true when starting the process
    try {
      if (email) {
        await Promise.all(
          selectedRoom.map(async (roomId) => {
            const res = await axios.put(
              `https://naikap-node-api.onrender.com/roomNumber/update/${roomId}`,
              { din: allDates }
            );
            console.log(res);
            if (res.status === 201) {
              navigate('/thankyou');
            }
          })
        );
      } else {
        navigate('/login');
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false); // Set loading to false after the process is complete
    }
  }

 
 const skeletonItems = Array(2).fill(0);
    return (
        <div className='flex justify-center items-center w-[100vw] h-[100vh] bg-black bg-opacity-50 fixed top-0 left-0 '>
            <div className='flex flex-col gap-3 bg-white z-50 p-[40px] relative '>
            <ImCross
          
          className=" absolute -top-3 text-gray-500 -right-3 z-50 hover:cursor-pointer"
          onClick={() => setOpen(false)}
        />
                <h3 className=' font-extrabold text-xl'>Choose your room</h3>
                {loading ? (
  <>
    {skeletonItems.map((_, index) => (
     <div className="flex justify-center items-center gap-6 relative">
     <div className="flex flex-col justify-between gap-2">
     <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
               <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
            
     </div>
     <div className="flex gap-1 justify-center">
     <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
               <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
                 </div>
   </div>
   
    ))}
  </>
) : (
  data?.list?.map((e) => (
    <div
      key={e.id}
      className="flex justify-center items-center gap-6 relative"
    >
      <div className="flex flex-col justify-between gap-2">
        <span>Bed Type: {e.bedType}</span>
        <span>Max People: {e.maxPeople}</span>
        <span>Bathroom: {e.bathroom}</span>
      </div>
      {e?.roomsNumber?.map((roomNum) => (
        <div className="flex gap-1 justify-center" key={roomNum._id}>
          <label>{roomNum.number}</label>
          <input
            type="checkbox"
            value={roomNum._id}
            onChange={handleChange}
            disabled={!isAvailable(roomNum)}
          />
        </div>
      ))}
    </div>
  ))
)}

<button
      onClick={handleReserve}
      className={`bg-green-85bc22 text-lg font-semibold p-3 rounded ${
        isLoading ? 'opacity-50 cursor-not-allowed' : ''
      }`}
      disabled={isLoading} // Disable the button while loading
    >
      {isLoading ? 'Loading...' : 'Reserve'}
    </button>
            </div>
        </div>
    )
}

export default Reserve