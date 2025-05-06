import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { CiSearch } from "react-icons/ci";
import Data from "../shared/Data";
import { use } from "react";
import { Link } from "react-router-dom";

function Search() {
  const [cars, setCars] = useState();
  const [Make, setMake] = useState();
  const [price, setPrice] = useState();
  return (
    <div className="p-2 bg-white rounded-md flex flex-row gap-2 md:gap-3 px-2 items-center w-full relative">
      {/* Cars Select Box */}
      <Select
        className="inline-flex w-20"
        onValueChange={(value) => setCars(value)}
      >
        <SelectTrigger className="w-full outline-none border border-gray-300 shadow-none text-xs sm:text-sm p-1 sm:p-5 truncate justify-center text-center">
          <SelectValue placeholder="Condition" />
        </SelectTrigger>
        <SelectContent
          className={
            "absolute top-full left-0 z-50 bg-white shadow-lg rounded-md"
          }
        >
          <SelectItem className="text-xs sm:text-sm" value="New">
            New
          </SelectItem>
          <SelectItem className="text-xs sm:text-sm" value="Used">
            Used
          </SelectItem>
          <SelectItem
            className="text-xs sm:text-sm"
            value="Certified Pre-Owned"
          >
            Certified Pre-Owned
          </SelectItem>
        </SelectContent>
      </Select>
      <Separator orientation="vertical" />
      {/* Car Makes Select Box */}
      <Select
        className="inline-flex w-36"
        onValueChange={(value) => setMake(value)}
      >
        <SelectTrigger className="w-full outline-none border border-gray-300 shadow-none text-xs sm:text-sm p-0.5 sm:p-5 truncate justify-center text-center">
          <SelectValue placeholder="Car Makes" />
        </SelectTrigger>
        <SelectContent
          className={
            "absolute top-full left-0 z-50 bg-white shadow-lg rounded-md"
          }
        >
          {Data.CarMakes.map((maker, index) => (
            <SelectItem
              key={index}
              value={maker.name}
              className="text-xs sm:text-sm"
            >
              {maker.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Separator orientation="vertical" />
      {/* Pricing Select Box */}
      <Select
        className="inline-flex w-36"
        onValueChange={(value) => setPrice(value)}
      >
        <SelectTrigger className="w-full outline-none border border-gray-300 shadow-none text-xs sm:text-sm p-0.5 sm:p-5 truncate justify-center text-center">
          <SelectValue placeholder="Pricing" />
        </SelectTrigger>
        <SelectContent
          className={
            "absolute top-full left-0 z-50 bg-white shadow-lg rounded-md"
          }
        >
          {Data.Pricing.map((price, index) => (
            <SelectItem
              key={index}
              value={price.amount}
              className="text-xs sm:text-sm"
            >
              {price.amount}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {/* Search Button */}
      <Link
        to={
          "/automart.lk/search?cars=" +
          cars +
          "&make=" +
          Make +
          "&price=" +
          price
        }
        className="text-sm sm:text-base bg-blue-900 text-white p-0.5 sm:p-5 rounded-full flex items-center justify-center cursor-pointer hover:bg-primary/80 transition-all duration-200 ease-in-out"
      >
        <CiSearch />
      </Link>
    </div>
  );
}

export default Search;
