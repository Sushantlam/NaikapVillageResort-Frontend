import React from 'react'
import Navbar from '../../Component/Navbar/Navbar'
import Footer from '../../Component/Footer/Footer'

const About = () => {
  return (
    <>
    <Navbar/>
    <div className='flex flex-col my-8 md:flex-row justify-evenly md:mt-14 md:mb-16 md:items-center md:gap-4 md:max-w-[1340px] md:mx-auto md:p-4  max-h-[1340px]'>
    <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/94/db/a9/restaurant.jpg?w=700&h=-1&s=1" className='w-full md:max-w-[40%] max-h-[300px]' alt="" />
    <div className='w-full flex flex-col gap-6 md:max-w-[50%] md:flex md:flex-col md:items-center md:gap-7'>

          <h1 className=' text-center text-2xl mt-5 md:text-2xl font-extrabold font-serif'>About Naikap Village</h1>
          <span className=' text-2xl font-light'>Naikap Village Resort | Great Location  | Warm Hospitality</span>
          <p className=' text-lg font-thin'>Naikap Village Resort is a full-fledged deluxe hotel, located in the heart of Kathmandu, Nepal.

We proffer the best hospitality including luxury facilitated Rooms, Apartments, Spa massage, Jacuzzi, Cafeteria, Dry Sauna, a Steam, and a Conference hall.

We provide you with a relaxing and calming environment for your stay.

Our cafeteria provides amazing seasonal national and international cuisines and our flexible and capacious conference hall provide you with a soothing experience for meetings and various events.

We also provide you with amusing Jacuzzi services and aesthetic luxury steam, sauna, and heavenly experience of spa massage.

Naikap Village Resort is considered the one-stop hotel in Kathmandu.</p>
       
       
        </div>
       
    </div>

    <div className='w-full py-10 '>
      <div className='flex flex-col gap-5 md:justify-between md:items-center md:max-w-[1340px]   md:mx-auto md:px-4 md:text-black' >
        <div className='flex flex-col gap-5 md:flex md:flex-col md:w-full md:justify-between md:items-center md:gap-5'>
        <h3 className=' text-center font-extrabold text-2xl'>Testimonials</h3>
                <h3 className='text-center font-normal text-lg'> Our Client says</h3>
                <div id="testimonials" className='relative flex flex-col gap-2 items-center py-16 justify-center md:flex-row md:items-center md:justify-center md:gap-10 md:min-h-[60%] md:max-w-[70%] md:p-16 '>


                    <div id="testImage" className='w-full  '>
                        <img className=' h-10 absolute top-0 left-0' src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/quote-left.svg" alt="" />
                        <img className='h-24  w-24 rounded-[50%]' src="https://images.unsplash.com/photo-1448518184296-a22facb4446f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" />
                        <img className=' h-10 absolute bottom-0 right-0' src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/quote-right.svg" alt="" />
                    </div>
                    <div id="review" className='flex flex-col justify-center items-center px-5 md:items-start md:gap-3 '>
                        <h3>John Doe</h3>
                        <h3>
                            ABC Trek
                        </h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci at illum dolor est, doloribus in hic tenetur! Veniam, doloribus? Suscipit magni nisi minima! Laudantium iure, aliquid praesentium doloremque molestias architecto quae expedita, laborum quidem mollitia ab odit pariatur sapiente. Commodi fuga enim dolore quos pariatur officia, nihil quam aliquid assumenda dolorum et. Inventore, optio voluptatibus odio voluptas maxime nam recusandae nostrum, beatae tenetur aut eius aliquid eum a explicabo quam qui atque. Repudiandae nisi repellat nesciunt, tenetur impedit, laudantium eum odio aliquid voluptates, fugiat blanditiis facilis eligendi. Voluptas quas commodi at inventore. Iste sed, assumenda quae voluptates iusto quidem cum?</p>      </div>
                </div>
                

        </div>
         </div>

    </div>

    
    <Footer/>

    </>
  )
}

export default About