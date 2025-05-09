import React from "react";
import { FaUser, FaEnvelope, FaCalendarAlt } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";

function OwnersDetal({ carDetail }) {
  return (
    <div className=" md:-ml-25 mt-3 p-5">
      <h2 className="text-md md:text-xl font-bold md:text-gray-700 mb-3 text-center">
        Owner Details / Deals
      </h2>
      <div className="flex items-center gap-6">
        {/* User Image */}
        <img
          src={carDetail?.userImageUrl}
          alt="Owner"
          className="w-[60px] h-[60px] md:w-[100px] md:h-[100px] rounded-full border-2 border-blue-500"
        />
        {/* User Details */}
        <div className="space-y-2 md:space-y-3">
          <h2 className="text-sm md:text-md font-bold text-gray-600">
            {carDetail?.userName || "Unknown User"}
          </h2>
          <p className="text-sm text-gray-500 flex items-center gap-2">
            <FaEnvelope className="text-blue-500" />
            {carDetail?.createdBy || "No Email Provided"}
          </p>
          <p className="text-sm text-gray-500 flex items-center gap-2">
            <FaCalendarAlt className="text-blue-500" />
            Joined: {carDetail?.postedOn || "N/A"}
          </p>
          <p className="text-sm text-white flex items-center gap-3 bg-blue-500 p-2 rounded-lg shadow-md">
            <FaPhoneVolume className="text-blue-500" />
            Contact: {carDetail?.contact || "No Contact Provided"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default OwnersDetal;
