import React from 'react'
import Navbar from '../../Component/Navbar/Navbar'
import Footer from '../../Component/Footer/Footer'

const Thnakyou = () => {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-evenly">
  <img
    src="/Thank.webp"
    className="w-full md:max-w-[50%] max-h-[450px]"
    alt="maintence"
  />
  <h1 className="text-center text-3xl text-green-85bc22 mt-4 md:mt-0">
    Thank you for choosing use your order is placed
  </h1>    </div>
    <Footer/>
    </>
  )
}

export default Thnakyou