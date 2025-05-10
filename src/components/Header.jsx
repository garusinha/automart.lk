import React, { useState } from "react";
import { useUser, UserButton, SignInButton } from "@clerk/clerk-react";
import { Button } from "./ui/button";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

function Header({ hidePostButton = false }) {
  const { isSignedIn } = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex justify-between items-center p-4 shadow-sm">
      {/* Logo */}
      <img
        src={`${import.meta.env.BASE_URL}logo.png`}
        className="w-30 sm:w-40 md:w-48 lg:w-56 h-auto"
        alt="Logo"
      />

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6 justify-center flex-1">
        <li className="font-medium hover:scale-105 cursor-pointer hover:text-primary">
          <Link to="/automart.lk/">Home</Link>
        </li>
        <li className="font-medium hover:scale-105 cursor-pointer hover:text-primary">
          <Link to="/automart.lk/search">Search</Link>
        </li>
      </ul>

      {/* Submit Listing Button for Mobile */}
      {!hidePostButton && isSignedIn ? (
        <div className="md:hidden flex items-center space-x-4">
          <Link to={"/automart.lk/profile"}>
            <Button className="block md:hidden text-[10px] h-6 px-1 py-1 bg-[#2f2f33] text-white rounded-sm hover:bg-[#2f2f33] cursor-pointer">
              Post Your Add
            </Button>
          </Link>
          <UserButton />
        </div>
      ) : (
        !hidePostButton && (
          <SignInButton mode="">
            <Button className="hidden md:block">Sign In</Button>
          </SignInButton>
        )
      )}

      {/* Hamburger Menu for Mobile */}
      {/* <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-xl focus:outline-none"
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div> */}

      {/* Mobile Menu */}
      {/* {isMenuOpen && (
        <div className="absolute top-16 right-0 items-center bg-white shadow-md z-50 flex flex-col space-y-4 py-4 md:hidden h-full w-full">
          <ul className="list-none justify-center space-y-4">
            <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">
              <Link to="/automart.lk/">Home</Link>
            </li>
            <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">
              <Link to="/automart.lk/search">Search</Link>
            </li>
          </ul>
        </div>
      )} */}

      {/* Submit Listing Button for Desktop */}
      {!hidePostButton && isSignedIn ? (
        <div className="hidden md:flex items-center space-x-4">
          <UserButton />
          <Link to={"/automart.lk/profile"}>
            <Button>Post Your Add</Button>
          </Link>
        </div>
      ) : (
        !hidePostButton && (
          <SignInButton mode="">
            <Button className="hidden md:block">Sign In</Button>
          </SignInButton>
        )
      )}
    </div>
  );
}

export default Header;
