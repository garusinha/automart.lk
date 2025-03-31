import React from "react";
import { Separator } from "./ui/separator";
import { LuFuel } from "react-icons/lu";
import { IoMdSpeedometer } from "react-icons/io";
import { TbManualGearboxFilled } from "react-icons/tb";
import { MdFileOpen } from "react-icons/md";

function CarItem({ car }) {
  return (
    <div className="border rounded-lg p-1 bg-white hover:shadow-md cursor-pointer ">
      {/* Badge */}
      <h2 className="absolute m-2 bg-green-200 px-2 rounded-full text-xs sm:text-sm">
        New
      </h2>

      {/* Car Image */}
      <img
        src={car?.image}
        alt={car?.name}
        className="w-full h-30 sm:h-50 object-cover rounded-t-lg"
      />

      {/* Car Details */}
      <div className="mt-1 mb-1 md:mt-4 md:mb-4">
        <h2 className="font-bold text-black text-sm sm:text-lg mb-2">
          {car?.name}
        </h2>
        <Separator />

        {/* Features Row */}
        <div className="flex flex-row justify-between items-center mt-1 md:mt-4 -mb-1 md:mb-4">
          {/* Fuel */}
          <div className="flex flex-col items-center ">
            <LuFuel className="text-[8px]  sm:text-lg mb-1 " />
            <h2 className="text-[8px] sm:text-sm">{car.miles} Miles</h2>
          </div>
          {/* Speedometer */}
          <div className="flex flex-col items-center">
            <IoMdSpeedometer className="text-[8px]  sm:text-lg mb-1" />
            <h2 className="text-[8px] sm:text-sm">{car.fuelType}</h2>
          </div>
          {/* Gearbox */}
          <div className="flex flex-col items-center">
            <TbManualGearboxFilled className="text-[8px]  sm:text-lg mb-1" />
            <h2 className="text-[8px] sm:text-sm">{car.gearType}</h2>
          </div>
        </div>

        <Separator className="my-2" />

        {/* Price and Details */}
        {/* Price and Details */}
        <div className="flex flex-col items-center justify-center mt-1 sm:mt-4">
          <h2 className="font-bold text-s sm:text-xl">${car.price}</h2>
          <h2 className="text-primary text-xs sm:text-sm flex gap-2 items-center cursor-pointer hover:underline mt-2">
            View Details
            <MdFileOpen />
          </h2>
        </div>
      </div>
    </div>
  );
}

export default CarItem;
