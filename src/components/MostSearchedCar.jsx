import React, { useEffect, useState } from "react";
import CarItem from "./CarItem";
import { db } from "./../../configs";
import { CarImages, CarListing } from "./../../configs/schema";
import { desc, eq } from "drizzle-orm";
import Service from "@/Shared/Service";

function MostSearchedCar() {
  const [carList, setCarList] = useState([]); // Grouped ads (8 per section)
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0); // Track the current page
  const itemsPerPage = 12; // Display 8 ads per section

  // Fetch all ads and group them into sections of 8
  const GetAllAds = async () => {
    try {
      setLoading(true); // Set loading to true before fetching data
      const result = await db
        .select()
        .from(CarListing)
        .leftJoin(CarImages, eq(CarListing.id, CarImages.carListingId))
        .orderBy(desc(CarListing.id)); // Fetch all ads without limit

      const resp = Service.FormatResult(result); // Format the result using a utility function
      console.log("Formatted Response:", resp);

      // Group ads into chunks of 8
      const groupedAds = [];
      for (let i = 0; i < resp.length; i += itemsPerPage) {
        groupedAds.push(resp.slice(i, i + itemsPerPage));
      }

      setCarList(groupedAds); // Update the state with grouped ads
    } catch (error) {
      console.error("Error fetching all ads:", error.message, error.stack);
    } finally {
      setLoading(false); // Set loading to false after fetching data
    }
  };

  useEffect(() => {
    GetAllAds(); // Fetch all ads when the component mounts
  }, []);

  // Handle Previous Button Click
  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Handle Next Button Click
  const handleNext = () => {
    if (currentPage < carList.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="mx-15 pl-0 pr-0 md:pl-20 md:pr-20">
      {/* Loading State */}
      {loading ? (
        <p className="text-center text-gray-500">Loading ads...</p>
      ) : carList.length === 0 ? (
        <p className="text-center text-gray-500">No ads found.</p>
      ) : (
        <>
          <div className="my-0 w-full">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
              {carList[currentPage].map((car, index) => (
                <div key={index} className="  pt-4 sm:p-4">
                  <CarItem car={car} />
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Buttons */}
          <div className="flex justify-center items-center mt-4">
            <button
              onClick={handlePrevious}
              disabled={currentPage === 0}
              className={`px-4 py-2 mx-2 rounded ${
                currentPage === 0
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-blue-500 text-white hover:bg-blue-600"
              }`}
            >
              Previous
            </button>
            <span className="text-gray-700 mx-4">
              Page {currentPage + 1} of {carList.length}
            </span>
            <button
              onClick={handleNext}
              disabled={currentPage === carList.length - 1}
              className={`px-4 py-2 mx-2 rounded ${
                currentPage === carList.length - 1
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-blue-500 text-white hover:bg-blue-600"
              }`}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default MostSearchedCar;
