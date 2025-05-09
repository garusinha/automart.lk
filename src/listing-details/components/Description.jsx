import React from "react";

function Description({ carDetail }) {
  return (
    <div>
      <div className="pt-3  mx-1 md:mx-15 ">
        <h2 className="text-md font-bold mb-2 md:text-lg text-center">
          Description
        </h2>
        <p className="text-[11px] md:text-sm text-gray-600  mb-2 leading-5 md:leading-6 text-justify md:text-base">
          {carDetail?.description}
        </p>
      </div>
    </div>
  );
}

export default Description;
