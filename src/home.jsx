import React from "react";
import { SignInButton, SignOutButton } from "@clerk/clerk-react"; // Import SignInButton and SignOutButton
import { Button } from "./components/ui/button"; // Import the Button component
import Header from "./components/Header";
import Hero from "./components/Hero";
import Category from "./components/Category";
import MostSearchedCar from "./components/MostSearchedCar";
import InfoSection from "./components/InfoSection";
import Footer from "./components/Footer";

export function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Category />
      <MostSearchedCar />
      <InfoSection />
      <Footer />
    </div>
  );
}
