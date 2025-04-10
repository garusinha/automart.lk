import React from "react";
import Search from "./Search"; // Import the Search component

function Hero() {
  return (
    <div className="mx-auto px-4 sm:px-8 lg:px-16 py-8 sm:py-12 -mt-6 ">
      <div className="flex flex-col items-center p-4 sm:p-10 py-5 sm:py-2 gap-4 sm:gap-6 h-85 sm:h-[500px] w-full bg-[#ced1e0] rounded-lg shadow-md">
        <h2 className="text-sm sm:text-lg tracking-wide font-semibold text-gray-900 animate-fade-in text-center">
          Find Your Dream Car
        </h2>
        <h2 className="text-3xl sm:text-[60px] font-bold text-center">
          Buy and Sell All Vehicles in Sri Lankas
        </h2>
        <Search /> {/* Include the Search component here */}
        <img
          src={`${import.meta.env.BASE_URL}car.png`} // Use import.meta.env.BASE_URL for dynamic path
          className="w-90 sm:w-90 md:w-96 lg:w-[900px] h-auto -mt-20 sm:-mt-60"
          alt="Car"
        />
      </div>
    </div>
  );
}

export default Hero;
