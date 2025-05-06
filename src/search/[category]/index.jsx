import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Search from "@/components/Search";
import { db } from "./../../../configs";
import { CarImages, CarListing } from "./../../../configs/schema";
import { eq } from "drizzle-orm";
import Service from "@/Shared/Service";
import CarItem from "@/components/CarItem";

function SearchByCategory() {
  const { category } = useParams();
  const [carList, setCarList] = useState([]); // Define state for car list

  useEffect(() => {
    GetCarList();
  }, []);

  const GetCarList = async () => {
    const result = await db
      .select()
      .from(CarListing)
      .innerJoin(CarImages, eq(CarListing.id, CarImages.carListingId))
      .where(eq(CarListing.category, category));

    const resp = Service.FormatResult(result); // Format the result using Service.FormatResult
    console.log(resp); // Debugging: Log the result
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
        <h2 className="font-bold text-4xl p-10 md:px-20">{category}</h2>
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

export default SearchByCategory;
