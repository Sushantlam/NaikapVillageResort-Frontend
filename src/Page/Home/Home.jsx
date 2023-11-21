import React from 'react'
import Navbar from '../../Component/Navbar/Navbar'
import Hero from '../../Component/HeroSection/Hero'
import Accomodation from '../../Component/Accomodation/Accomodation'
import Facilities from '../../Component/Facilities/Facilities'
import About from '../../Component/About/About'
import Footer from '../../Component/Footer/Footer'
import useFetch from '../../hooks/useFetch'
const Home = () => {
  const {data, loading, error}= useFetch("/room")
  console.log(data);
  return (
    <>
    <Navbar/>
    <Hero/>
    <Accomodation/>
    <Facilities/>
    <About/>
    <Footer/>
    </>
  )
}

export default Home