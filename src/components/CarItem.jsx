import React from "react";
import { LuFuel } from "react-icons/lu";
import { IoMdSpeedometer } from "react-icons/io";
import { TbManualGearboxFilled } from "react-icons/tb";
import { Link } from "react-router-dom";

function CarItem({ car }) {
  return (
    <Link to={"/automart.lk/listing-details/" + car?.id}>
      <div className="border p-0 bg-white hover:shadow-md cursor-pointer">
        {/* Car Image */}
        <img
          src={car?.images[0]?.imageUrl}
          alt={car?.name}
          className="object-cover  h-[120px] sm:h-[150px] w-full"
        />

        {/* Car Details */}
        <div className="mt-1 mb-1 md:mt-2 pl-4">
          <h2 className="font-bold text-black text-[10px] sm:text-[12px] mb-1">
            {car?.listingTitle}
          </h2>
          {/* Price */}
          <div className="flex flex-col justify-center mt-1 sm:mt-0.5">
            <h2 className="font-bold text-xs sm:text-xs mb-1 text-green-800">
              {car?.sellingPrice} Lkr
            </h2>
          </div>
          {/* Features Row */}
          <div className="flex flex-row  items-center md:mb-1 text-[8px] sm:text-[10px]">
            {/* Condition */}
            <div className="flex items-center gap-1">
              <span className="font-semibold">{car?.condition}</span>
            </div>
            <div className="h-4 border-l border-gray-300 mx-2"></div>
            {/* Mileage */}
            <div className="flex items-center gap-1">
              <span>{car?.mileage} km</span>
            </div>
            <div className="h-4 border-l border-gray-300 mx-2"></div>
            {/* Fuel */}
            <div className="flex items-center gap-1">
              <span>{car?.type}</span>
            </div>
            <div className="h-4 border-l border-gray-300 mx-2"></div>
            {/* Transmission */}
            <div className="flex items-center gap-1">
              <span>{car?.transmission}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CarItem;
