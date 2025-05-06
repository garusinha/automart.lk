import { Button } from "@/components/ui/button";
import React from "react";
import { MdLocalOffer } from "react-icons/md";

function Pricing({ carDetail }) {
  return (
    <div className="p-5 px-10 rounded-xl border shadow-md -ml-25 -mt-15">
      <h2>Our Price</h2>
      <h2 className="font-bold text-3xl mt-1">{carDetail.sellingPrice} Lkr</h2>
      <Button className="mt-5 bg-blue-600">
        <MdLocalOffer />
        Make an Offer Pricee
      </Button>
    </div>
  );
}

export default Pricing;
