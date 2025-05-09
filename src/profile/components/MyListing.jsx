import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { db } from "../../../configs";
import { CarImages, CarListing } from "../../../configs/schema";
import { Link } from "react-router-dom";
import { eq, desc } from "drizzle-orm";
import { useUser } from "@clerk/clerk-react";
import Service from "@/Shared/Service";
import CarItem from "@/components/CarItem";
import { FaTrashAlt } from "react-icons/fa";
import { deleteObject, ref } from "firebase/storage";
import { storage } from "../../../configs/firebaseConfig";

function MyListing() {
  const { user } = useUser();
  const [carList, setCarList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("User object:", user);
    if (!user) return;
    GetUserCarListing();
  }, [user]);

  const GetUserCarListing = async () => {
    try {
      setLoading(true);

      const result = await db
        .select()
        .from(CarListing)
        .leftJoin(CarImages, eq(CarListing.id, CarImages.carListingId))
        .where(
          eq(CarListing.createdBy, user?.primaryEmailAddress?.emailAddress)
        )
        .orderBy(desc(CarListing.id));

      console.log("Query result:", result);

      const resp = Service.FormatResult(result); // Format the result using a utility function
      console.log("Formatted Response:", resp);

      setCarList(resp); // Update the state with the fetched listings
    } catch (error) {
      console.error("Error in GetUserCarListing:", error);
    } finally {
      setLoading(false); // Hide loading indicator
      console.log("Loading state set to false.");
    }
  };

  const handleDeleteListing = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this listing?"
    );
    if (!confirmDelete) return;

    try {
      // Fetch associated images
      const images = await db
        .select()
        .from(CarImages)
        .where(eq(CarImages.carListingId, id));
      console.log("Images to delete:", images);

      // Delete images from Firebase Storage
      for (const image of images) {
        const imageRef = ref(storage, image.imageUrl);
        console.log("Deleting image from Firebase Storage:", image.imageUrl);
        try {
          await deleteObject(imageRef);
          console.log("Image deleted from Firebase Storage:", image.imageUrl);
        } catch (error) {
          if (error.code === "storage/object-not-found") {
            console.warn(
              "Image not found in Firebase Storage. Skipping deletion."
            );
          } else {
            throw error;
          }
        }
      }

      await db.delete(CarImages).where(eq(CarImages.carListingId, id));

      await db.delete(CarListing).where(eq(CarListing.id, id));

      // Update the carList state to remove the deleted listing
      setCarList((prev) => prev.filter((car) => car.id !== id));
      alert("Listing deleted successfully.");
    } catch (error) {
      console.error("Error deleting listing:", error.message || error);
      alert("Failed to delete the listing. Please try again.");
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-2xl md:text-4xl">My Listing</h2>
        <Link to={"/automart.lk/add-listing"}>
          <Button className="bg-blue-500 text-white hover:bg-blue-700 mt-4 text-xs md:text-sm">
            + Add New Listing
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
        {loading ? (
          <p className="text-center text-gray-500">Loading your listings...</p>
        ) : !user ? (
          <p className="text-center text-gray-500">
            Please log in to view your listings.
          </p>
        ) : carList.length > 0 ? (
          carList.map((item, index) => (
            <div key={index} className="mb-4">
              <CarItem car={item} />
              <div className="p-2 flex justify-between rounded-lg bg-gray-50 gap-2">
                <Link to={"/automart.lk/add-listing?mode=edit&id=" + item?.id}>
                  <Button variant="outline" className="w-30 cursor-pointer ">
                    Edit
                  </Button>
                </Link>
                <Button
                  variant="desstructive"
                  className="bg-red-500 text-white cursor-pointer"
                  onClick={() => handleDeleteListing(item?.id)} // Add onClick handler
                >
                  <FaTrashAlt />
                </Button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No listings found.</p>
        )}
      </div>
    </div>
  );
}

export default MyListing;
