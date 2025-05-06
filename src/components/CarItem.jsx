import React from "react";
import { Separator } from "./ui/separator";
import { LuFuel } from "react-icons/lu";
import { IoMdSpeedometer } from "react-icons/io";
import { TbManualGearboxFilled } from "react-icons/tb";
import { MdFileOpen } from "react-icons/md";
import { Link, useParams } from "react-router-dom";

function CarItem({ car }) {
  return (
    <Link to={"/automart.lk/listing-details/" + car?.id}>
      <div className="border rounded-lg p-0 bg-white hover:shadow-md cursor-pointer">
        {/* Badge */}
        <h2 className="absolute m-2 bg-green-200 px-2 rounded-full text-xs sm:text-sm">
          New
        </h2>

        {/* Car Image */}
        <img
          src={car?.images[0]?.imageUrl}
          alt={car?.name}
          className="object-cover rounded-t-lg h-[120px] sm:h-[150px] w-full"
        />

        {/* Car Details */}
        <div className="mt-1 mb-1 md:mt-2 md:mb-4">
          <h2 className="font-bold text-center text-black text-[10px] sm:text-[12px] mb-1">
            {car?.listingTitle}
          </h2>
          <Separator />

          {/* Features Row */}
          <div className="flex flex-row justify-between items-center mt-1 md:mt-1 mb-1 md:mb-1">
            {/* Fuel */}
            <div className="flex flex-col items-center ">
              <LuFuel className="text-[8px]  sm:text-[15px] mb-1 " />
              <h2 className="text-[8px] sm:text-[10px] pl-1">
                {car?.mileage} Miles
              </h2>
            </div>
            {/* Speedometer */}
            <div className="flex flex-col items-center">
              <IoMdSpeedometer className="text-[8px]  sm:text-[15px] mb-1" />
              <h2 className="text-[8px] sm:text-[10px]">{car?.type}</h2>
            </div>
            {/* Gearbox */}
            <div className="flex flex-col items-center">
              <TbManualGearboxFilled className="text-[8px]  sm:text-[15px] mb-1" />
              <h2 className="text-[8px] sm:text-[10px] pr-1">
                {car?.transmission}
              </h2>
            </div>
          </div>

          <Separator className="my-2" />

          {/* Price and Details */}
          <div className="flex flex-col items-center justify-center mt-1 sm:mt-0.5">
            <h2 className="font-bold text-xs sm:text-xs -mt-1">
              ${car?.sellingPrice}
            </h2>
            <h2 className="text-primary text-xs sm:text-xs flex gap-2 items-center cursor-pointer hover:underline -mb-3 ">
              View Details
              <MdFileOpen />
            </h2>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CarItem;
