import React, { useState, useEffect } from "react";

function ImageGallery({ carDetail }) {
  const [currentImage, setCurrentImage] = useState("");

  // Update the current image when carDetail changes
  useEffect(() => {
    if (carDetail?.images?.length > 0) {
      setCurrentImage(carDetail.images[0].imageUrl); // Set the first image as default
    }
  }, [carDetail]);

  const handleThumbnailClick = (imageUrl) => {
    setCurrentImage(imageUrl);
  };

  return (
    <div className="flex flex-col items-center w-full mt-3">
      {/* Main Image */}
      {currentImage ? (
        <img
          src={currentImage}
          className="w-full md:w-[80%] h-[180px] md:h-[430px] object-cover mb-4 p-3 md:p-5 "
          alt="Car"
        />
      ) : (
        <p>No images available</p>
      )}

      {/* Thumbnails */}
      <div className="flex gap-2 justify-center overflow-x-auto -mt-5 ">
        {carDetail?.images?.map((image, index) => (
          <img
            key={index}
            src={image.imageUrl}
            className={`w-10 h-10 md:h-20 md:w-20 object-cover rounded-lg cursor-pointer ${
              currentImage === image.imageUrl ? "border-2 border-blue-500" : ""
            }`}
            alt={`Thumbnail ${index + 1}`}
            onClick={() => handleThumbnailClick(image.imageUrl)}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageGallery;
