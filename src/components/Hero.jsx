import React from "react";
import Search from "./Search"; // Import the Search component

function Hero() {
  return (
    <div className="mx-auto px-4 sm:px-8 lg:px-16 py-8 sm:py-12">
      <div className="flex flex-col items-center p-6 sm:p-10 py-16 sm:py-20 gap-4 sm:gap-6 h-auto sm:h-[500px] w-full bg-[#eef0fc] rounded-lg shadow-md">
        <h2 className="text-sm sm:text-lg tracking-wide font-semibold text-gray-500 animate-fade-in text-center">
          Find Your Dream Car
        </h2>
        <h2 className="text-3xl sm:text-[60px] font-bold text-center">
          Buy and Sell All Vehicles in Sri Lanka
        </h2>

        {/* Search Section */}
        <div className="flex flex-row items-center justify-center gap-4 w-full">
          {/* Cars Dropdown */}
          <div className="flex flex-col items-center">
            <label
              htmlFor="cars"
              className="text-xs sm:text-sm font-medium mb-1"
            >
              Cars
            </label>
            <select
              id="cars"
              className="border border-gray-300 rounded-md px-3 py-2 text-sm w-full"
            >
              <option value="suv">SUV</option>
              <option value="sedan">Sedan</option>
              <option value="hatchback">Hatchback</option>
            </select>
          </div>

          {/* Car Makes Dropdown */}
          <div className="flex flex-col items-center">
            <label
              htmlFor="car-makes"
              className="text-xs sm:text-sm font-medium mb-1"
            >
              Car Makes
            </label>
            <select
              id="car-makes"
              className="border border-gray-300 rounded-md px-3 py-2 text-sm w-full"
            >
              <option value="toyota">Toyota</option>
              <option value="honda">Honda</option>
              <option value="bmw">BMW</option>
            </select>
          </div>

          {/* Pricing Dropdown */}
          <div className="flex flex-col items-center">
            <label
              htmlFor="pricing"
              className="text-xs sm:text-sm font-medium mb-1"
            >
              Pricing
            </label>
            <select
              id="pricing"
              className="border border-gray-300 rounded-md px-3 py-2 text-sm w-full"
            >
              <option value="low-to-high">Low to High</option>
              <option value="high-to-low">High to Low</option>
            </select>
          </div>
        </div>

        <img
          src="/car.png"
          className="w-40 sm:w-200 h-auto -mt-10 sm:-mt-50"
          alt="Car"
        />
      </div>
    </div>
  );
}

export default Hero;
