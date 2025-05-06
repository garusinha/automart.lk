import IconField from "@/add-listing/components/IconField";
import CarSpecification from "@/Shared/CarSpecification";
import React from "react";

function Specification({ carDetail }) {
  return (
    <div className=" -ml-25 mt-4">
      <h2 className="p-5 text-xl font-bold">Car Specification</h2>
      {CarSpecification.map((item, index) => (
        <div
          className="flex items-center gap-2 p-2 border-b justify-between"
          key={index}
        >
          <h2 className="flex items-center gap-2 text-gray-500 pl-8">
            <IconField icon={item.icon} />
            {item?.name}
          </h2>
          <h2 className="text-blue-500 pr-5">{carDetail?.[item?.name]}</h2>
        </div>
      ))}
    </div>
  );
}

export default Specification;
