import Data from "@/Shared/Data";
import React from "react";

function Category() {
  return (
    <div className="p-10 py-20 gap-6 h-[500px] w-full ">
      <h2 className="font-bold text-3xl text-center mb-6">Browse By Type</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-6 px-20">
        {Data.Category.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-center border rounded-lg shadow-md p-4 bg-white hover:shadow-lg transition-shadow duration-200 ease-in-out cursor-pointer"
          >
            <img
              src={category.icon}
              alt={category.name}
              width={40}
              height={40}
              className="mb-2"
            />
            <h3 className="text-sm font-medium">{category.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
