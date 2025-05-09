import React from "react";
import { IoSpeedometer } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { FaGasPump } from "react-icons/fa6";
import { TbManualGearboxFilled } from "react-icons/tb";

function DetailHeader({ carDetail }) {
  return (
    <div className="p-10 text-center">
      {carDetail?.listingTitle ? (
        <div className="flex flex-col items-center gap-2">
          <h2 className="font-bold text-xl md:text-2xl">
            {carDetail?.listingTitle}
          </h2>
          <p>{carDetail?.tagline}</p>

          <div className="flex flex-row sm:flex-row gap-2 mt-4 text-[8px] md:text-lg mb-1">
            <div className="flex gap-2 items-center mt-2 bg-blue-50 rounded p-2 mb-5">
              <SlCalender className="h-3 md:h-6 w-3 md:w-6 text-blue-600" />
              <h2 className="text-blue-800">{carDetail?.year}</h2>
            </div>
            <div className="flex gap-2 items-center mt-2 bg-blue-50 rounded p-2 mb-5">
              <IoSpeedometer className="h-3 md:h-6 w-3 md:w-6 text-blue-600" />
              <h2 className="text-blue-800">{carDetail?.mileage}</h2>
            </div>
            <div className="flex gap-2 items-center mt-2 bg-blue-50 rounded p-2 mb-5">
              <TbManualGearboxFilled className="h-3 md:h-6 w-3 md:w-6 text-blue-600" />
              <h2 className="text-blue-800">{carDetail?.transmission}</h2>
            </div>
            <div className="flex gap-2 items-center mt-2 bg-blue-50 rounded p-2 mb-5">
              <FaGasPump className="h-3 md:h-6 w-3 md:w-6 text-blue-600" />
              <h2 className="text-blue-800">{carDetail?.type}</h2>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full rounded-xl h-[100px] bg-slate-200 animate-accordion-up"></div>
      )}
    </div>
  );
}

export default DetailHeader;
