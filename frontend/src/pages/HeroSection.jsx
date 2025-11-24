import { useState, useEffect } from "react";
import {ArrowRight} from 'lucide-react'
import { useNavigate } from "react-router-dom";


const HeroSection = () => {

  const Navigate = useNavigate()
  const slides = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/18715693/pexels-photo-18715693.jpeg",
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/33554395/pexels-photo-33554395.jpeg",
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg",
    },
  ];

  const [current, setCurrent] = useState(0);

  // Auto slide change every 3 sec
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
   <div className="bg-gray-600">
     <div className="bg-gray-800 mx-1 rounded-b-2xl text-white min-h-[400px] flex items-center justify-center">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-6">
      
       {/* left side */}
        <div className="flex flex-col justify-center space-y-4">
          <p className="text-gray-300 text-medium">
            There are many variations of passages of Lorem Ipsum available.
          </p>
          <h1 className="text-3xl md:text-4xl font-bold leading-snug">
            High-Converting Landing Page <br /> Lorem Ipsum
          </h1>
          <button onClick={()=>Navigate("/login")} className="flex items-center gap-2 bg-white text-gray-800 text-lg px-5 py-1  rounded-lg font-medium w-fit hover:bg-gray-200">
            Get started <ArrowRight className="w-5 h-4"/>
          </button>
        </div>

       {/* right side */}
        <div className="flex space-x-4">
          {/* Main Slider Box */}
          <div className="flex-1 bg-gray-700 rounded-lg overflow-hidden relative">
            <img
              src={slides[current].img}
              alt="slide"
              className="w-full h-full object-cover transition-all duration-700"
            />
          </div>

          {/* Dots Indicator */}
          <div className="w-12 flex flex-col items-center justify-center space-y-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full ${
                  current === index ? "bg-white" : "bg-gray-500"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
   </div>
  );
};

export default HeroSection;
