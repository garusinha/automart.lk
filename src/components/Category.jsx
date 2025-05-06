import Data from "@/Shared/Data";
import React from "react";
import { Link } from "react-router-dom";

function Category() {
  return (
    <div className="p-4 sm:p-10 py-2 gap-4 sm:gap-6 h-auto w-full -mt-10 ">
      <h2 className="font-bold text-lg sm:text-2xl md:text-3xl text-center mb-4 sm:mb-6">
        Browse By Category
      </h2>
      <div className="flex flex-row gap-2 px-2 sm:px-20 overflow-x-auto justify-start sm:justify-center snap-x snap-mandatory">
        {Data.Category.map((category, index) => (
          <Link to={"/automart.lk/search/" + category.name} key={index}>
            <div className="flex-shrink-0 flex flex-col items-center justify-center text-center border border-gray-300 rounded-md shadow-sm p-1 sm:p-3 bg-white hover:bg-gray-100 hover:border-primary hover:shadow-lg transition-all duration-200 ease-in-out cursor-pointer min-w-[80px] sm:min-w-[100px] w-[25%] sm:w-auto snap-center">
              <img
                src={category.icon}
                alt={category.name}
                width={30} // Smaller icon size for mobile
                height={30} // Smaller icon size for mobile
                className="mb-1 sm:mb-2"
              />
              <h3 className="text-xs sm:text-sm font-medium">
                {category.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Category;
