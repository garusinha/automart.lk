import Header from "@/components/Header";
import React from "react";
import carDetails from "../Shared/carDetails.json";
import InputField from "./components/InputField";
import { Separator } from "@/components/ui/separator";
import features from "../Shared/features.json";

const AddListing = () => {
  return (
    <div>
      <Header />
      <div className="px-10 md:px-40 my-10">
        <h2 className="font-bold text-4xl">Add New Listing</h2>
        <form className="p-10 border rounded-xl mt-10 bg-white">
          {/* Car Details */}
          <div>
            <h2 className="font-medium text-2xl mb-6 -mx-5">Car Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Map through carDetails and create input fields based on fieldType */}
              {carDetails.carDetails?.map((item, index) => (
                <div key={index} className="mb-4">
                  {/* Handle Text and Number Fields */}
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
                      />
                    </div>
                  ) : null}

                  {/* Handle Dropdown Fields */}
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

                  {/* Handle Textarea Fields */}
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
                  />
                  <label htmlFor={item.name} className="text-lg">
                    {item.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddListing;
