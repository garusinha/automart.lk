import React from "react";

function Description({ carDetail }) {
  return (
    <div>
      <div className="p-3  mx-15  ">
        <h2 className="text-lg font-bold mb-2">Description</h2>
        <p className="text-sm text-gray-600  mb-2 leading-6">
          {carDetail?.description}
        </p>
      </div>
    </div>
  );
}

export default Description;
