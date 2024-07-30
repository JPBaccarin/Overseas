"use client";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useEffect, useState } from "react";

interface CountryData {
  name: {
    common: string;
  };
  capital: string[];
  region: string;
  cca2: string;
  cca3: string;
  area: number;
  borders: string[];
  idd: {
    root: string;
    suffixes: string[];
  };
  cioc: string;
  currencies: {
    [key: string]: string;
  };
  flags: string[];
  altSpellings: string[];
  capitalInfo: any;
  car: any;
  coatOfArms: {
    svg: string;
  };
  continents: string[];
  demonyms: any;
  fifa: string;
  gini: {
    [key: number]: any;
  };
  independent: boolean;
  landlocked: boolean;
  languages: {
    [key: string]: string;
  };
  latlng: number[];
  maps: {
    googleMaps: string;
  };
  population: number;
  postalCode: {
    format: string;
  };
  startOfWeek: string;
  status: string;
  timezones: string[];
  tld: string[];
  unMember: boolean;
}

export default function Page({ params }: { params: { country: string } }) {
  const [data, setData] = useState<CountryData[]>([]);
  const [dataType, setDataType] = useState("general");
  useEffect(() => {
    axios.get(`https://restcountries.com/v3.1/name/${params.country}`)
      .then((response) => setData(response.data))
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          // Redirect to not found page
          window.location.href = "/not-found";
        }
      });
  }, [params.country]);
  console.log(data);
  return (
    <div className="p-4">
      {data.map((item, index) => (
        <div key={index}>
          <div className="flex flex-row justify-around w-full  border-b pb-4">
            <div className="w-full flex flex-col justify-center">
              <h1 className="text-7xl mb-2 ">
                <b> {item.name.common}</b>
              </h1>
              <p className="mb-2 text-xl ">Capital: {item.capital[0]}</p>
            </div>
            <div className=" flex justify-end items-center w-full">
              <img src={"https://flagcdn.com/" + item.cca2.toLowerCase() + ".svg"} className="h-40"></img>
            </div>
          </div>

          <div className="flex flex-row justify-between border-b py-2 mb-2 gap-2 flex-wrap">
            <Button className="bg-background rounded-none border-x" onClick={() => setDataType("general")}>
              General
            </Button>
            <Button className="bg-background rounded-none border-x" onClick={() => setDataType("economic")}>
              Economic
            </Button>
            <Button className="bg-background rounded-none border-x" onClick={() => setDataType("cost_of_living")}>
              Cost of Living
            </Button>
            <Button className="bg-background rounded-none border-x" onClick={() => setDataType("culture_and_language")}>
              Culture and Language
            </Button>
            <Button className="bg-background rounded-none border-x" onClick={() => setDataType("documentation")}>
              Documentation
            </Button>
            <Button className="bg-background rounded-none border-x" onClick={() => setDataType("education")}>
              Education
            </Button>
            <Button className="bg-background rounded-none border-x" onClick={() => setDataType("healthcare")}>
              Healthcare
            </Button>
            <Button className="bg-background rounded-none border-x" onClick={() => setDataType("housing")}>
              Housing
            </Button>
            <Button className="bg-background rounded-none border-x" onClick={() => setDataType("job_market")}>
              Job Market
            </Button>
            <Button className="bg-background rounded-none border-x" onClick={() => setDataType("safety")}>
              Safety
            </Button>
            <Button className="bg-background rounded-none border-x" onClick={() => setDataType("social_connections")}>
              Social Connections
            </Button>
            <Button className="bg-background rounded-none border-x" onClick={() => setDataType("taxes")}>
              Taxes
            </Button>
            <Button className="bg-background rounded-none border-x" onClick={() => setDataType("transportation")}>
              Transportation
            </Button>
            <Button className="bg-background rounded-none border-x" onClick={() => setDataType("visas")}>
              Visas
            </Button>
          </div>
          {dataType === "general" && (
            <div>
              <div>
                <p>Region: {item.region}</p>
                <p>Alpha2Code: {item.cca2}</p>
                <p>Alpha3Code: {item.cca3}</p>
                <p>Area: {item.area}</p>
                <p>Borders: {item.borders ? item.borders.join(", ") : ""}</p>{" "}
                <p>Calling Codes: {item.idd.root + item.idd.suffixes.join(", ")}</p>
                <p>CIoC: {item.cioc}</p>
                <p>Currencies: {Object.keys(item.currencies).join(", ")}</p>
                <img src={item.coatOfArms.svg} alt="" />
                <img src={item.flags[0]} alt="" />
                <p>AltSpellings: {item.altSpellings.join(", ")}</p>
                <p>Capital Info: {JSON.stringify(item.capitalInfo)}</p>
                <p>Car Info: {JSON.stringify(item.car)}</p>
                <p></p>
                <p>Continents: {item.continents ? item.continents.join(", ") : ""}</p>
                <p>Demonyms: {JSON.stringify(item.demonyms)}</p>
                <p>FIFA Code: {item.fifa}</p>
                <p>Independent: {item.independent ? "Yes" : "No"}</p>
                <p>Landlocked: {item.landlocked ? "Yes" : "No"}</p>
                <p>Languages: {Object.values(item.languages).join(", ")}</p>
                <p>Latitude and Longitude: {item.latlng.join(", ")}</p>
                <p>Maps: {item.maps.googleMaps}</p>
                <p>Population: {item.population}</p>
                <p>Postal Code Format: {item.postalCode.format}</p>
                <p>Start of Week: {item.startOfWeek}</p>
                <p>Status: {item.status}</p>
                <p>Timezones: {item.timezones.join(", ")}</p>
                <p>Top Level Domain: {item.tld.join(", ")}</p>
                <p>UN Member: {item.unMember ? "Yes" : "No"}</p>
              </div>
            </div>
          )}
          {dataType === "economic" && (
            <div>
              {/* Economic data display */}
              <p>Economic data here</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
