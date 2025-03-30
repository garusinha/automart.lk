import React from "react";
import { useUser, UserButton } from "@clerk/clerk-react";
import { Button } from "./ui/button";

function Header() {
  const { user, isSignedIn } = useUser();

  return (
    <div className="flex justify-between items-center p-4 shadow-sm">
      <img
        src={`${import.meta.env.BASE_URL}logo.png`}
        className="w-32 sm:w-40 md:w-48 lg:w-56 h-auto"
        alt="Logo"
      />
      <ul className="hidden md:flex space-x-15">
        <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">
          Home
        </li>
        <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">
          Search
        </li>
        <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">
          New
        </li>
        <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">
          PreOwned
        </li>
      </ul>
      {isSignedIn ? (
        <div className="flex items-center space-x-4">
          <UserButton />
          <Button>Submit Listing</Button>
        </div>
      ) : (
        <Button>Submit Listing</Button>
      )}
    </div>
  );
}

export default Header;
