import React from "react";
import { IoMdCheckboxOutline } from "react-icons/io";

function Features({ features }) {
  return (
    <div className="mt-6">
      <div className="p-3 md:mx-15 mt-5">
        <h2 className="text-md font-bold mb-2 md:text-lg text-center">
          Features
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3  md:gap-5 pb-1 md:pb-5 rounded-md ">
          {Object.entries(features || {})
            .filter(([_, value]) => value) // Only include features with a true value
            .map(([feature, _]) => (
              <div
                className="flex items-center gap-1 md:gap-2 text-gray-600 text-[11px] md:text-sm font-semibold bg-gray-100 p-2 rounded-md shadow-sm mb-2"
                key={feature}
              >
                <IoMdCheckboxOutline className="text-lg p-0.5 rounded-full bg-blue-100 text-blue-600" />
                <h2>{feature}</h2>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Features;
