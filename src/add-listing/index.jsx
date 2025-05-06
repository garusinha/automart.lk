import Header from "@/components/Header";
import React, { useEffect, useState } from "react";
import carDetails from "../Shared/carDetails.json";
import InputField from "./components/InputField";
import { Separator } from "@/components/ui/separator";
import features from "../Shared/features.json";
import { Button } from "@/components/ui/button";
import { CarImages, CarListing } from "./../../configs/schema";
import UploadImages from "./components/UploadImages";
import { RiLoader4Line } from "react-icons/ri";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import { toast } from "sonner";
import moment from "moment";
import { db } from "./../../configs";
import Service from "@/Shared/Service";
import { eq } from "drizzle-orm";
import Footer from "@/components/Footer";

function AddListing() {
  const [formData, setFormData] = useState({ listingTitle: "" });
  const [featuresData, setFeaturesData] = useState({});
  const [triggerUploadImages, setTriggerUploadImages] = useState(null);
  const [searchParams] = useSearchParams();
  const [loader, setLoader] = useState(false);
  const [carInfo, setCarInfo] = useState({});
  const navigate = useNavigate();
  const { user } = useUser();

  const mode = searchParams.get("mode");
  const recordId = searchParams.get("id");

  useEffect(() => {
    if (mode === "edit") {
      GetListingDetail();
    } else {
      setFormData({ listingTitle: "" });
      setFeaturesData(
        features.features?.reduce((acc, feature) => {
          acc[feature.name] = false; // Initialize all features as unchecked
          return acc;
        }, {})
      );
    }
  }, [mode]);

  const GetListingDetail = async () => {
    try {
      const result = await db
        .select()
        .from(CarListing)
        .innerJoin(CarImages, eq(CarListing.id, CarImages.carListingId))
        .where(eq(CarListing.id, recordId));
      const resp = Service.FormatResult(result);

      // console.log("Response from database:", resp[0]); // Debugging response

      setCarInfo(resp[0]); // Populate carInfo
      setFormData(resp[0]); // Populate formData

      // Extract existing features from the database response
      const existingFeatures = resp[0]?.features || {};
      console.log("Existing features from database:", existingFeatures);

      // Map existing features to featuresData
      const populatedFeaturesData = features.features?.reduce(
        (acc, feature) => {
          acc[feature.name] = existingFeatures[feature.name] === true; // Ensure boolean value
          return acc;
        },
        {}
      );
      setFeaturesData(populatedFeaturesData);

      console.log("Populated featuresData:", populatedFeaturesData); // Debugging
    } catch (error) {
      console.error("Error fetching listing details:", error);
      toast.error("Failed to fetch listing details.");
    }
  };
  const handleInputChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFeatureChange = (name, value) => {
    setFeaturesData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);

    try {
      if (mode === "edit") {
        // Update the existing listing
        await db
          .update(CarListing)
          .set({
            ...formData,
            contact: formData.contact || "077-1234567",
            features: featuresData,
            createdBy: user?.primaryEmailAddress?.emailAddress,
            userName: user?.fullName,
            userImageUrl: user?.imageUrl,
            postedOn: moment().format("YYYY-MM-DD HH:mm:ss"),
          })
          .where(eq(CarListing.id, recordId))
          .returning({ id: CarListing.id });

        toast.success("Listing updated successfully!");
      } else {
        // Create a new listing
        const result = await db
          .insert(CarListing)
          .values({
            ...formData,
            features: featuresData,
            createdBy: user?.primaryEmailAddress?.emailAddress,
            postedOn: moment().format("YYYY-MM-DD HH:mm:ss"),
          })
          .returning({ id: CarListing.id });

        if (result) {
          console.log("Database insertion successful. ID:", result[0]?.id);
          setTriggerUploadImages(result[0]?.id);
        }

        toast.success("Listing created successfully!");
      }

      // Redirect to the profile page after successful submission
      navigate("/automart.lk/profile");
    } catch (error) {
      console.error("Error during form submission:", error);
      toast.error("Failed to submit the listing. Please try again.");
    } finally {
      setLoader(false);
    }
  };

  return (
    <div>
      <Header />
      <div className="px-10 md:px-40 my-10">
        <h2 className="font-bold text-4xl">Add New Listing</h2>
        <form
          className="p-10 border rounded-xl mt-10 bg-white"
          onSubmit={onSubmit}
        >
          {/* Car Details */}
          <div>
            <h2 className="font-medium text-2xl mb-6 -mx-5">Car Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {carDetails.carDetails?.map((item, index) => (
                <div key={index} className="mb-4">
                  {item.fieldType === "text" || item.fieldType === "number" ? (
                    <div>
                      <label className="block font-medium mb-2 flex items-center gap-1">
                        {item.label}
                        {item.required && (
                          <span className="text-red-600">*</span>
                        )}
                      </label>
                      <InputField
                        type={item.fieldType}
                        name={item.name}
                        required={item.required}
                        handleInputChange={handleInputChange}
                        carInfo={carInfo}
                      />
                    </div>
                  ) : null}

                  {item.fieldType === "dropdown" ? (
                    <div>
                      <label className="block font-medium mb-2 flex items-center gap-1">
                        {item.label}
                        {item.required && (
                          <span className="text-red-600">*</span>
                        )}
                      </label>
                      <select
                        name={item.name}
                        required={item.required}
                        className="w-full border rounded-lg p-2"
                        value={formData?.[item.name] || ""}
                        onChange={(e) =>
                          handleInputChange(item.name, e.target.value)
                        }
                      >
                        <option value="">Select {item.label}</option>
                        {item.options?.map((option, idx) => (
                          <option key={idx} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  ) : null}

                  {item.fieldType === "textarea" ? (
                    <div>
                      <label className="block font-medium mb-2 flex items-center gap-1">
                        {item.label}
                        {item.required && (
                          <span className="text-red-600">*</span>
                        )}
                      </label>
                      <textarea
                        name={item.name}
                        required={item.required}
                        placeholder={`Enter ${item.label}`}
                        className="w-full border rounded-lg p-4"
                        rows="6"
                        value={formData?.[item.name] || ""}
                        onChange={(e) =>
                          handleInputChange(item.name, e.target.value)
                        }
                      ></textarea>
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
          {/* Features List */}
          <Separator className="font-medium text-xl mb-6" />
          <div>
            <h2 className="font-medium text-2xl mb-6 -mx-2">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              {features.features?.map((item, index) => (
                <div key={index} className="flex items-center mb-4">
                  <input
                    type="checkbox"
                    id={item.name}
                    name={item.name}
                    className="mr-2"
                    checked={featuresData?.[item.name] || false}
                    onChange={(e) =>
                      handleFeatureChange(item.name, e.target.checked)
                    }
                  />
                  <label htmlFor={item.name} className="text-lg">
                    {item.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <Separator className="font-medium text-xl mb-6" />
          {/* Upload Images */}
          <UploadImages
            triggerUploadImages={triggerUploadImages}
            setLoader={(v) => setLoader(v)}
            existingImages={carInfo?.images || []}
          />
          <div className="mt-10 flex justify-end gap-4">
            <Button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              type="submit"
              disabled={loader}
            >
              {!loader ? (
                "Submit"
              ) : (
                <RiLoader4Line className="animate-spin text-lg" />
              )}
            </Button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default AddListing;
