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
    <div className="p-2 md:p-5 bg-white rounded-md md:rounded-full flex-col md:flex md:flex-row gap-10 px-5 items-center w-[60%] relative">
      <Select className="relative">
        <SelectTrigger className="w-full outline-none md:border-none shadow-none text-lg">
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
      <Select>
        <SelectTrigger className="w-full outline-none md:border-none shadow-none text-lg">
          <SelectValue placeholder="Car Makes" />
        </SelectTrigger>
        <SelectContent
          className={
            "absolute top-full left-0 z-50 bg-white shadow-lg rounded-md"
          }
        >
          {Data.CarMakes.map((maker, index) => (
            <SelectItem value={maker.name}>{maker.name}</SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Separator orientation="vertical" />
      <Select>
        <SelectTrigger className="w-full outline-none md:border-none shadow-none text-lg">
          <SelectValue placeholder="Pricing" />
        </SelectTrigger>
        <SelectContent
          className={
            "absolute top-full left-0 z-50 bg-white shadow-lg rounded-md"
          }
        >
          {Data.Pricing.map((price, index) => (
            <SelectItem value={price.amount}>{price.amount}</SelectItem>
          ))}
        </SelectContent>
      </Select>
      <div className="text-xl bg-blue-900 text-white p-2 rounded-full flex items-center justify-center cursor-pointer hover:bg-primary/80 transition-all duration-200 ease-in-out">
        <CiSearch />
      </div>
    </div>
  );
}

export default Search;
