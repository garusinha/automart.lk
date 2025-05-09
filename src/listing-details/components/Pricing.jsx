import { Button } from "@/components/ui/button";
import React from "react";
import { MdLocalOffer } from "react-icons/md";

function Pricing({ carDetail }) {
  // Format the price with commas
  const formattedPrice = new Intl.NumberFormat("en-US").format(
    carDetail.sellingPrice
  );

  return (
    <div className="md:p-5 m-15 p-5 md:px-10 rounded-xl md:border md:shadow-md md:-ml-25 -mt-20">
      <h2 className="text-center md:text-justify">Our Price</h2>
      <h2 className="font-bold text-xl md:text-3xl mt-0 md:mt-1 text-center md:text-justify md:text-black text-green-900 -mb-6">
        Rs {formattedPrice}
      </h2>
      <Button className="mt-1 md:mt-10 bg-blue-600 text-[12px] md:text-lg hidden sm:flex items-center gap-2 text-white font-semibold rounded-md px-4 py-2 hover:bg-blue-700 transition duration-200 ease-in-out">
        <MdLocalOffer />
        Make an Offer Price
      </Button>
    </div>
  );
}

export default Pricing;
