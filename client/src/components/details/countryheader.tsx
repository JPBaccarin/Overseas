import React from "react";
import { CountryHeaderData } from "@/components/types/CountryHeaderData";

interface CountryHeaderProps {
  item: CountryHeaderData;
}

export const CountryHeader: React.FC<CountryHeaderProps> = ({ item }) => (
  <div className="flex flex-row justify-around w-full border-b pb-4">
    <div className="w-full flex flex-col justify-center">
      <h1 className="text-7xl mb-2 ">
        <b>{item.name.common}</b>
      </h1>
      <p className="mb-2 text-xl">Capital: {item.capital[0]}</p>
    </div>
    <div className="flex justify-end items-center w-full">
      <img src={"https://flagcdn.com/" + item.cca2.toLowerCase() + ".svg"} className="h-40" alt="Country flag" />
    </div>
  </div>
);
