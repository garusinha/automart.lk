import Service from "@/Shared/Service";
import { db } from "./../../configs";
import { CarImages, CarListing } from "./../../configs/schema";
import { eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";
import { use } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import { Car, Search } from "lucide-react";
import CarItem from "@/components/CarItem";
import Category from "@/components/Category";

function SearchByOptions() {
  const [searchParams] = useSearchParams();
  const [carList, setCarList] = useState([]);
  const condition = searchParams.get("cars");

  const make = searchParams.get("make");
  const price = searchParams.get("price");

  useEffect(() => {
    GetCarList();
  }, [condition, make, price]);

  const GetCarList = async () => {
    const result = await db
      .select()
      .from(CarListing)
      .innerJoin(CarImages, eq(CarListing.id, CarImages.carListingId))
      .where(condition != undefined && eq(CarListing.condition, condition))
      .where(make != undefined && eq(CarListing.make, make));
    // .where(price != undefined && withi(CarListing.price));

    const resp = Service.FormatResult(result);

    setCarList(resp);
  };
  return (
    <div>
      <Header />
      <div className="bg-[#ced1e0]">
        <div className="p-10 w-[80%] mx-auto">
          <Search />
        </div>
      </div>
      <div className="px-10 md:px-30">
        <h2 className="font-bold text-4xl p-10 md:px-20">Search Result</h2>
        <div className="px-10 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {carList.length > 0 ? (
              carList.map((item, index) => (
                <div key={index} className="mb-4">
                  <CarItem car={item} />
                </div>
              ))
            ) : (
              <p>No cars found for this category.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchByOptions;
