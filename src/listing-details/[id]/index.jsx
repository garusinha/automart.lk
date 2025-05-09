import Header from "@/components/Header";
import React, { useEffect, useState } from "react";
import DetailHeader from "../components/DetailHeader";
import { useParams } from "react-router-dom";
import { db } from "./../../../configs";
import { CarImages, CarListing } from "./../../../configs/schema";
import { eq } from "drizzle-orm";
import Service from "@/Shared/Service";
import ImageGallery from "../components/ImageGallery";
import Description from "../components/Description";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import Specification from "../components/Specification";
import OwnersDetal from "../components/OwnersDetal";
import Footer from "@/components/Footer";
import Calculator from "../components/Calculator";

function ListingDetail() {
  const { id } = useParams();
  const [carDetail, setCarDetail] = useState([]);

  useEffect(() => {
    GetCarDetail();
  }, []);

  const GetCarDetail = async () => {
    const result = await db
      .select()
      .from(CarListing)
      .innerJoin(CarImages, eq(CarListing.id, CarImages.carListingId))
      .where(eq(CarListing.id, id));

    const resp = Service.FormatResult(result);
    setCarDetail(resp[0]);
  };

  return (
    <div>
      {/* Header Component */}
      <Header />
      <div>
        {/* Header Detail Component */}
        <DetailHeader carDetail={carDetail} />

        {/* Pricing for Mobile View */}
        <div className="block md:hidden p-4">
          <Pricing carDetail={carDetail} />
        </div>

        <div className="grid md:grid-cols-4 p-0 md:p-10 w-full gap-4">
          {/* Left */}
          <div className="md:col-span-3 md:m-10 m-6 -mt-20 md:-mt-20">
            {/* Image Gallery */}
            <ImageGallery carDetail={carDetail} />
            {/* Description */}
            <Description carDetail={carDetail} />
            {/* Features List */}
            <Features features={carDetail?.features} />
          </div>
          {/* Right */}
          <div className=" md:m-10 m-6">
            {/* Pricing for Desktop View */}
            <div className="hidden md:block">
              <Pricing carDetail={carDetail} />
            </div>
            {/* Car Specification */}
            <Specification carDetail={carDetail} />
            {/* Owners Details */}
            <OwnersDetal carDetail={carDetail} />
          </div>
        </div>
        <div>
          {/* Calculator */}
          <Calculator carDetail={carDetail} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ListingDetail;
