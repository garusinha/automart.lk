import {
  getDownloadURL,
  ref,
  uploadBytes,
  deleteObject,
} from "firebase/storage";
import React, { useState, useEffect } from "react";
import { IoCloseCircleSharp } from "react-icons/io5";
import { storage } from "./../../../configs/firebaseConfig";
import { db } from "./../../../configs";
import { CarImages } from "./../../../configs/schema";
import { eq } from "drizzle-orm";

function UploadImages({ triggerUploadImages, setLoader, existingImages = [] }) {
  const [selectedFileList, setSelectedFileList] = useState([]); // New images selected for upload
  const [uploadedImages, setUploadedImages] = useState(existingImages); // Existing images

  // Update uploadedImages state when existingImages prop changes
  useEffect(() => {
    console.log("Existing images received:", existingImages);
    setUploadedImages(existingImages);
  }, [existingImages]);

  useEffect(() => {
    if (triggerUploadImages) {
      console.log("triggerUploadImages detected:", triggerUploadImages);
      if (selectedFileList.length > 0) {
        console.log("Starting upload with selected files:", selectedFileList);
        UploadImageToServer();
      } else {
        console.warn("No files selected for upload.");
      }
    }
  }, [triggerUploadImages]);

  const onFileSelected = (event) => {
    const files = Array.from(event.target.files);
    console.log("Files selected:", files);
    if (files.length === 0) {
      alert("Please select at least one file to upload.");
      return;
    }
    setSelectedFileList((prev) => [...prev, ...files]);
  };

  const onImageRemove = (image) => {
    const result = selectedFileList.filter((item) => item !== image);
    setSelectedFileList(result);
  };

  const onExistingImageRemove = async (image) => {
    console.log("Attempting to remove image:", image); // Debugging

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this image?"
    );
    if (!confirmDelete) return;

    setLoader(true);
    try {
      // Delete the image from Firebase Storage
      const imageRef = ref(storage, image.imageUrl);
      await deleteObject(imageRef);
      console.log("Image deleted from Firebase Storage:", image.imageUrl);

      // Delete the image metadata from the database
      await db.delete(CarImages).where(eq(CarImages.id, image.id));
      console.log("Image metadata deleted from database.");

      // Remove the image from the state
      setUploadedImages((prev) => prev.filter((img) => img.id !== image.id));
      console.log("Image removed from state.");
    } catch (error) {
      console.error("Error deleting image:", error);
      alert("Failed to delete the image. Please try again.");
    } finally {
      setLoader(false);
    }
  };

  const UploadImageToServer = async () => {
    console.log("UploadImageToServer called with files:", selectedFileList);
    setLoader(true);
    try {
      for (const file of selectedFileList) {
        const fileName = Date.now() + "_" + file.name;
        const storageRef = ref(storage, "marketplace/" + fileName);
        const metaData = {
          contentType: file.type,
        };

        const snapShot = await uploadBytes(storageRef, file, metaData);
        const downloadUrl = await getDownloadURL(storageRef);

        const result = await db.insert(CarImages).values({
          imageUrl: downloadUrl,
          carListingId: triggerUploadImages,
        });

        // Add the uploaded image to the state
        setUploadedImages((prev) => [
          ...prev,
          { id: result[0]?.id, imageUrl: downloadUrl },
        ]);
      }

      // Clear the selected files after upload
      setSelectedFileList([]);
      console.log("Selected files cleared after upload.");
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Failed to upload images. Please try again.");
    } finally {
      setLoader(false);
    }
  };

  return (
    <div>
      <h2 className="font-medium text-xl p-4">Upload Car Images</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 p-4">
        {uploadedImages.map((image, index) => (
          <div key={index} className="relative">
            <IoCloseCircleSharp
              className="absolute top-2 right-2 text-lg text-red-600 cursor-pointer"
              onClick={() => onExistingImageRemove(image)}
            />
            <img
              src={image.imageUrl}
              alt={`Uploaded ${index}`}
              className="w-full h-32 object-cover rounded-xl border border-blue-200"
            />
          </div>
        ))}

        {selectedFileList.map((image, index) => (
          <div key={index} className="relative">
            <IoCloseCircleSharp
              className="absolute top-2 right-2 text-lg text-red-600 cursor-pointer"
              onClick={() => onImageRemove(image)}
            />
            <img
              src={URL.createObjectURL(image)}
              alt={`Selected ${index}`}
              className="w-full h-32 object-cover rounded-xl border border-blue-200"
            />
          </div>
        ))}

        <label htmlFor="upload-images">
          <div className="border rounded-xl border-dotted border-blue-700 bg-blue-100 p-10 cursor-pointer hover:shadow-lg transition duration-300 ease-in-out flex items-center justify-center">
            <h2 className="text-lg text-center text-blue-600">+</h2>
          </div>
        </label>
        <input
          type="file"
          multiple
          id="upload-images"
          onChange={onFileSelected}
          className="opacity-0 absolute"
        />
      </div>
    </div>
  );
}

export default UploadImages;
