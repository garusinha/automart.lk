import React, { useState } from "react";
import { useUser, UserButton, SignInButton } from "@clerk/clerk-react";
import { Button } from "./ui/button";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons for the hamburger menu
import { Link } from "react-router-dom";

function Header() {
  const { user, isSignedIn } = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle menu visibility
  return (
    <div className="flex justify-between items-center p-4 shadow-sm  ">
      {/* Logo */}
      <img
        src={`${import.meta.env.BASE_URL}logo.png`}
        className="w-40 sm:w-40 md:w-48 lg:w-56 h-auto"
        alt="Logo"
      />

      {/* Submit Listing Button for Mobile */}
      <Button className="block md:hidden text-sm px-2 py-1 bg-[#2f2f33] text-white rounded-md hover:bg-[#2f2f33] cursor-pointer">
        Submit Listing
      </Button>

      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-2xl focus:outline-none"
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6">
        <li className="font-medium hover:scale-105 cursor-pointer hover:text-primary">
          <Link to="/automart.lk/">Home </Link>
        </li>
        <li className="font-medium hover:scale-105  cursor-pointer hover:text-primary">
          <Link to="/automart.lk/search">Search</Link>
        </li>
        {/* <li className="font-medium hover:scale-105  cursor-pointer hover:text-primary">
          New
        </li>
        <li className="font-medium hover:scale-105  cursor-pointer hover:text-primary">
          PreOwned
        </li> */}
      </ul>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 right-0 items-center bg-white shadow-md z-50 flex flex-col space-y-4 py-4 md:hidden h-full w-full">
          <ul className="list-none justify-center space-y-4">
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
        </div>
      )}

      {/* Submit Listing Button for Desktop */}
      {isSignedIn ? (
        <div className="hidden md:flex items-center space-x-4">
          <UserButton />
          <Link to={"/automart.lk/profile"}>
            <Button>Submit Listing</Button>
          </Link>
        </div>
      ) : (
        <SignInButton mode="">
          <Button className="hidden md:block">Sign In</Button>
        </SignInButton>
      )}
    </div>
  );
}

export default Header;
