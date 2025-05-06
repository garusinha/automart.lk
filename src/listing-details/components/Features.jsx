import React from "react";
import { IoMdCheckboxOutline } from "react-icons/io";

function Features({ features }) {
  return (
    <div className="mt-6">
      <div className="p-3  mx-15 mt-5">
        <h2 className="text-lg font-bold mb-2">Features</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 pb-5">
          {Object.entries(features || {}).map(([feature, value]) => (
            <div
              className="flex items-center gap-2 text-gray-600"
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
