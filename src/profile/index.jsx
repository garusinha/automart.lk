import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <div>
      <Header />
      <div className="container mx-auto mt-4 px-10 md:px-20 my-10">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-4xl ">My Listing</h2>
          <Link to={"/automart.lk/add-listing"}>
            <Button className="bg-blue-500 text-white hover:bg-blue-700 mt-4">
              + Add New Listing
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Profile;
