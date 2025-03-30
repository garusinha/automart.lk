import React, { useState } from "react";
import { useUser, UserButton } from "@clerk/clerk-react";
import { Button } from "./ui/button";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons for the hamburger menu

function Header() {
  const { user, isSignedIn } = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle menu visibility

  return (
    <div className="flex justify-between items-center p-4 shadow-sm">
      {/* Logo */}
      <img
        src={`${import.meta.env.BASE_URL}logo.png`}
        className="w-28 sm:w-40 md:w-48 lg:w-56 h-auto"
        alt="Logo"
      />

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

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md z-50 flex flex-col items-center space-y-4 py-4 md:hidden">
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
        </div>
      )}

      {/* Submit Listing Button */}
      {isSignedIn ? (
        <div className="hidden md:flex items-center space-x-4">
          <UserButton />
          <Button>Submit Listing</Button>
        </div>
      ) : (
        <Button className="hidden md:block">Submit Listing</Button>
      )}
    </div>
  );
}

export default Header;
