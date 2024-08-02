"use client";
import React, { useState, useEffect } from "react";
import { SelectCountry } from "./hero.input";

const images = [
  "https://romanroams.com/wp-content/uploads/2020/03/banff-canada-nature.jpg",
  "https://jazico-travel.com/Assets/images/canada/6.jpg",
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[80vh] m-2 rounded-md flex flex-row justify-between text-center text-foreground">
      <div className="z-10 items-center flex flex-col justify-center">
        <h1 className="text-5xl mb-4 font-semibold">Find Your New Home</h1>
        <p className="text-2xl mb-4">Enter the name of the country you want to live:</p>
        <SelectCountry />
      </div>
      <div className="  relative rounded-md w-2/4">
        <img
          src={images[currentImage]}
          alt="Country"
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1] transition-opacity duration-1000 rounded-md"
        />
      </div>
    </div>
  );
};

export default Hero;
