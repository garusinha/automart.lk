import React from "react";
import { Separator } from "./ui/separator";
import { LuFuel } from "react-icons/lu";
import { IoMdSpeedometer } from "react-icons/io";
import { TbManualGearboxFilled } from "react-icons/tb";
import { MdFileOpen } from "react-icons/md";

function CarItem({ car }) {
  return (
    <div className="border-xl p-4 bg-white hover:shadow-md cursor-pointer">
      <h2 className="absolute m-2 bg-green-200 px-2 rounded-full text-sm">
        New
      </h2>
      <img
        src={car?.image}
        alt={car?.name}
        width={"100%"}
        height={250}
        className="rounded-t-xl"
      />
      <div className="mt-5">
        <h2 className="font-bold text-black text-lg mb-2">{car?.name}</h2>
        <Separator />
        <div className="flex flex-row justify-between items-center mt-4">
          {/* Fuel */}
          <div className="flex flex-col items-center">
            <LuFuel className="text-lg mb-1" />
            <h2 className="text-sm">{car.miles} Miles</h2>
          </div>
          {/* Speedometer */}
          <div className="flex flex-col items-center">
            <IoMdSpeedometer className="text-lg mb-1" />
            <h2 className="text-sm">{car.fuelType}</h2>
          </div>
          {/* Gearbox */}
          <div className="flex flex-col items-center">
            <TbManualGearboxFilled className="text-lg mb-1" />
            <h2 className="text-sm">{car.gearType}</h2>
          </div>
        </div>
        <Separator className="my-2" />
        <div className="flex items-center justify-between mt-4">
          <h2 className="font-bold text-xl">${car.price} </h2>
          <h2 className="text-primary text-sm flex gap-2 items-center cursor-pointer hover:underline">
            View Details
            <MdFileOpen />
          </h2>
        </div>
      </div>
    </div>
  );
}

export default CarItem;
