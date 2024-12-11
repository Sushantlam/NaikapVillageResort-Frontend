import React, { useState, useEffect } from 'react';
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';

const Hero = () => {
  const [slideNum, setSlideNum] = useState(0);

  const photos = [
    { src: "/Image1.webp" },
    { src: "/Room1.jpg" },
    { src: "/Image2.webp" },
    { src: "/Image3.webp" },
  ];

  // Function to handle direction
  function handleDirection(direction) {
    let number;
    if (direction === 'l') {
      number = slideNum - 1;
      if (number < 0) {
        number = photos.length - 1;
      }
    } else if (direction === 'r') {
      number = slideNum + 1;
      if (number === photos.length) {
        number = 0;
      }
    }
    setSlideNum(number);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      handleDirection('r'); 
    }, 3000);

    return () => clearInterval(interval); 
  }, [slideNum]); 

  return (
    <div className="relative">
      <img 
        src={photos[slideNum].src} 
        className="w-[100vw] h-[88vh] object-fill" 
        alt={`Slide ${slideNum + 1}`} 
      />
      <BsArrowLeftCircle 
        className="absolute top-72 left-1 text-green-400 cursor-pointer" 
        onClick={() => handleDirection('l')} 
        size={30} 
      />
      <BsArrowRightCircle 
        className="absolute top-72 right-1 text-green-400 cursor-pointer" 
        onClick={() => handleDirection('r')} 
        size={30} 
      />
    </div>
  );
};

export default Hero;
