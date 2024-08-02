"use client";
import { Button } from "@/components/ui/button";
import axios from "axios";
import dynamic from "next/dynamic";
import { Suspense, useEffect, useState } from "react";
import Loading from "@/components/ui/loading";
import Skeleton from "@/components/ui/skeleton";
 import Error from "@/components/ui/error";
import { CountryData } from "@/components/types/CountryData";
const GeneralInfo = dynamic(() => import("@/components/details/general"), {
  suspense: true,
});

export default function Page({ params }: { params: { country: string } }) {
  const [data, setData] = useState<CountryData[]>([]);
  const [dataType, setDataType] = useState("general");
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/name/${params.country}`)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
        setError(false);
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          window.location.href = "/not-found";
        } else {
          setError(true);
        }
      });
  }, [params.country]);

  if (error) {
    return <Error />;
  }

  return (
    <div className="p-4">
      {data.length === 0 ? (
        <Skeleton />
      ) : (
        data.map((item, index) => (
          <div key={index}>
            <div className="flex flex-row justify-around w-full border-b pb-4">
              <div className="w-full flex flex-col justify-center">
                <h1 className="text-7xl mb-2 ">
                  <b>{item.name.common}</b>
                </h1>
                <p className="mb-2 text-xl">Capital: {item.capital[0]}</p>
              </div>
              <div className="flex justify-end items-center w-full">
                <img
                  src={"https://flagcdn.com/" + item.cca2.toLowerCase() + ".svg"}
                  className="h-40"
                  alt="Country flag"
                />
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
              <Button
                className="bg-background rounded-none border-x"
                onClick={() => setDataType("culture_and_language")}
              >
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
            <Suspense fallback={<Loading />}>
              {dataType === "general" && <GeneralInfo data={item} />}
              {dataType === "economic" && (
                <div>
                  <p>Economic data here</p>
                </div>
              )}
            </Suspense>
          </div>
        ))
      )}
    </div>
  );
}
