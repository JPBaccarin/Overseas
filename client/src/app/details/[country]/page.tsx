"use client";
import { useEffect, useState, Suspense } from "react";
import axios from "axios";
import dynamic from "next/dynamic";
import Loading from "@/components/ui/loading";
import Skeleton from "@/components/ui/skeleton";
import Error from "@/components/ui/error";
import { CountryHeaderData } from "@/components/types/CountryHeaderData";
import { CountryHeader } from "@/components/details/countryheader";
import { DataButtons } from "@/components/details/databuttons";
import { CountryDetails } from "@/components/types/CountryDetailsData";
import EconomyComponent from "@/components/details/datacomponents/economic";
import { CultureComponent } from "@/components/details/datacomponents/culture_language";
import { DocumentationComponent } from "@/components/details/datacomponents/documentation";
import { EducationComponent } from "@/components/details/datacomponents/education";
import { HealthcareComponent } from "@/components/details/datacomponents/healthcare";
import { HousingComponent } from "@/components/details/datacomponents/housing";
import { SafetyComponent } from "@/components/details/datacomponents/safety";
import { SocialConnectionsComponent } from "@/components/details/datacomponents/social";
import { TransportationComponent } from "@/components/details/datacomponents/transportation";
import { VisaComponent } from "@/components/details/datacomponents/visa";
import { progress } from "framer-motion";

const GeneralInfo = dynamic(() => import("@/components/details/datacomponents/general"), {
  suspense: true,
});

export default function Page({ params }: { params: { country: string } }) {
  const [data, setData] = useState<CountryHeaderData[]>([]);
  const [detailedData, setDetailedData] = useState<CountryDetails | null>(null);
  const [dataType, setDataType] = useState("general");
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/name/${params.country}`)
      .then((response) => {
        setData(response.data);
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

  useEffect(() => {
    if (dataType !== "general") {
      fetchEconomicData(params.country);
    }
  }, [dataType, params.country]);

  const fetchEconomicData = (country: string) => {
    axios
      .get(`http://localhost:3002/api/country-details/${country}`)
      .then((response) => {
        setDetailedData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar dados econômicos:", error);
        setError(true);
      });
  };

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
            <CountryHeader item={item} />
            <DataButtons setDataType={setDataType} />
            <Suspense fallback={<Loading />}>
              {dataType === "general" && <GeneralInfo data={item} />}
              {dataType === "economic" && detailedData && (
                <EconomyComponent
                  jobMarket={detailedData.job_markets}
                  taxes={detailedData.taxes}
                  costOfLiving={detailedData.cost_of_livings}
                />
              )}
              {dataType === "culture_and_language" && detailedData && (
                <CultureComponent data={detailedData.culture_and_languages} />
              )}
              {dataType === "documentation" && detailedData && (
                <DocumentationComponent data={detailedData.documentations} />
              )}
              {dataType === "education" && detailedData && <EducationComponent data={detailedData.education} />}
              {dataType === "healthcare" && detailedData && <HealthcareComponent data={detailedData.healthcares} />}

              {dataType === "housing" && detailedData && <HousingComponent data={detailedData.housings} />}
              {dataType === "safety" && detailedData && <SafetyComponent data={detailedData.safety} />}
              {dataType === "social_connections" && detailedData && (
                <SocialConnectionsComponent data={detailedData.social_connections} />
              )}
              {dataType === "transportation" && detailedData && (
                <TransportationComponent data={detailedData.transportation} />
              )}
              {dataType === "visas" && detailedData && <VisaComponent data={detailedData.visas} />}
              {dataType === "images" && <p>work in progress...</p>}
            </Suspense>
          </div>
        ))
      )}
    </div>
  );
}
