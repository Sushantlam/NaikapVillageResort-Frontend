import React from 'react';
import Navbar from '../../Component/Navbar/Navbar';
import Footer from '../../Component/Footer/Footer';
import useFetch from '../../hooks/useFetch';
import { Link } from 'react-router-dom';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
const Room = () => {
  const { data, loading, error } = useFetch("https://naikap-node-api.onrender.com/room");

  // Skeleton array to simulate loading items
  const skeletonItems = Array(3).fill(0);

  return (
    <>
      <Navbar />
      <h3 className="uppercase text-2xl text-center font-semibold p-8">
        Rooms and Rates
      </h3>

      {loading ? (
       <>
   {skeletonItems.map((_, index) => (
           <div
           key={index}
           className="flex flex-col relative mb-10 md:flex-row md:relative justify-evenly md:mt-6 md:mb-4 md:items-center md:gap-6 md:max-w-[1340px] md:mx-auto overflow-hidden w-full bg-[#313131]"
         >
           <div
             role="status"
             className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center w-full"
           >
             <div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
               <div
                 className="w-10 h-10 text-gray-200 dark:text-gray-600"
               >
                                </div>
             </div>
             <div className="w-full">
               <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
               <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
               <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
               <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
               <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
               <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
             </div>
             <span className="sr-only">Loading...</span>
           </div>
         </div>
         
         
         
          ))}

       </>
      ) : (
        data?.getAllRoom?.map((element, index) => (
          <div
            key={index}
            className="flex flex-col relative mb-10 md:flex-row md:relative justify-evenly md:mt-6 md:mb-4 md:items-center md:gap-6 md:max-w-[1340px] md:mx-auto overflow-hidden"
          >
            <img
              src={element.images.url}
              className="w-full hover:bg-black bg-opacity-50 md:max-w-[100%] max-h-[350px] object-cover overflow-hidden"
              alt={element.title}
            />
            <div
              className={`absolute top-0 left-0 bg-black bg-opacity-50 flex flex-col gap-2 py-10 px-3 md:gap-3 md:z-40 md:bg-black md:bg-opacity-50 md:h-[100%] ${
                index % 2 === 0 ? "md:left-0" : "md:right-0"
              } md:py-4 md:px-16 md:absolute md:max-w-[500px]`}
            >
              <h3 className="text-base font-extrabold text-white uppercase md:text-2xl md:font-extrabold">
                {element.title}
              </h3>
              <h5 className="text-sm font-light text-yellow-300 font-serif md:text-base">
                START FROM RS.{element.price} PER DAY
              </h5>
              <p className="text-xs text-white md:text-base">{element.desc}</p>
              <Link to={`/room/${element._id}`}>
                <button className="bg-green-85bc22 p-2 md:p-2 md:bg-green-85bc22">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))
      )}

      <Footer />
    </>
  );
};

export default Room;
