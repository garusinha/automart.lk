import React from "react";
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

function Search() {
  return (
    <div className="p-2 bg-white rounded-md flex flex-row gap-2 px-2 items-center w-full relative">
      <Select className="relative w-[30%]">
        <SelectTrigger className="w-full outline-none border border-gray-300 shadow-none text-xs sm:text-sm p-1 sm:p-2">
          <SelectValue placeholder="Cars" />
        </SelectTrigger>
        <SelectContent
          className={
            "absolute top-full left-0 z-50 bg-white shadow-lg rounded-md"
          }
        >
          <SelectItem value="light">New</SelectItem>
          <SelectItem value="dark">Old</SelectItem>
        </SelectContent>
      </Select>
      <Separator orientation="vertical" />
      <Select className="w-[30%]">
        <SelectTrigger className="w-full outline-none border border-gray-300 shadow-none text-xs sm:text-sm p-1 sm:p-2">
          <SelectValue placeholder="Car Makes" />
        </SelectTrigger>
        <SelectContent
          className={
            "absolute top-full left-0 z-50 bg-white shadow-lg rounded-md"
          }
        >
          {Data.CarMakes.map((maker, index) => (
            <SelectItem key={index} value={maker.name}>
              {maker.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Separator orientation="vertical" />
      <Select className="w-[30%]">
        <SelectTrigger className="w-full outline-none border border-gray-300 shadow-none text-xs sm:text-sm p-1 sm:p-2">
          <SelectValue placeholder="Pricing" />
        </SelectTrigger>
        <SelectContent
          className={
            "absolute top-full left-0 z-50 bg-white shadow-lg rounded-md"
          }
        >
          {Data.Pricing.map((price, index) => (
            <SelectItem key={index} value={price.amount}>
              {price.amount}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <div className="text-sm sm:text-base bg-blue-900 text-white p-1 sm:p-2 rounded-full flex items-center justify-center cursor-pointer hover:bg-primary/80 transition-all duration-200 ease-in-out">
        <CiSearch />
      </div>
    </div>
  );
}

export default Search;
