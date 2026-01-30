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
import countriesData from "@/app/data/countries.json";

const GeneralInfo = dynamic(() => import("@/components/details/datacomponents/general"), {
  suspense: true,
});

// Constante com a URL base permitida
const ALLOWED_API_BASE = "https://restcountries.com/v3.1/name/";

// Função para sanitizar e validar o nome do país
function sanitizeCountryName(country: string): string {
  // Remove caracteres especiais e permite apenas letras, números, espaços e hífens
  return country.replace(/[^a-zA-Z0-9\s-]/g, "").trim();
}

interface DetailsClientProps {
  country: string;
}

export default function DetailsClient({ country }: DetailsClientProps) {
  const [data, setData] = useState<CountryHeaderData[]>([]);
  const [detailedData, setDetailedData] = useState<CountryDetails | null>(null);
  const [dataType, setDataType] = useState("general");
  const [error, setError] = useState(false);

  useEffect(() => {
    // Sanitizar o nome do país
    const sanitizedCountry = sanitizeCountryName(country);

    if (!sanitizedCountry) {
      setError(true);
      return;
    }

    // Construir a URL de forma segura
    const apiUrl = `${ALLOWED_API_BASE}${encodeURIComponent(sanitizedCountry)}`;

    // Buscar dados da API externa (RestCountries) para informações gerais
    axios
      .get(apiUrl, {
        timeout: 10000, // Timeout de 10 segundos
        headers: {
          Accept: "application/json",
        },
      })
      .then((response) => {
        setData(response.data);
        setError(false);
      })
      .catch((error) => {
        console.error("Erro ao buscar dados da API:", error);
        if (error.response && error.response.status === 404) {
          window.location.href = "/not-found";
        } else {
          setError(true);
        }
      });
  }, [country]);

  useEffect(() => {
    if (dataType !== "general") {
      fetchLocalData(country);
    }
  }, [dataType, country]);

  // Função para buscar dados locais do arquivo JSON
  const fetchLocalData = (countryParam: string) => {
    try {
      // Normalizar o nome do país para busca
      const normalizedCountry = countryParam.toLowerCase().trim();

      // Buscar no arquivo JSON local
      const countryData = countriesData.find(
        (c: any) =>
          c.name.toLowerCase() === normalizedCountry ||
          c.id.toLowerCase() === normalizedCountry ||
          c.iso_code.toLowerCase() === normalizedCountry,
      );

      if (countryData) {
        setDetailedData(countryData as CountryDetails);
        console.log("Dados locais carregados:", countryData);
      } else {
        console.warn(`País não encontrado nos dados locais: ${countryParam}`);
        setError(true);
      }
    } catch (error) {
      console.error("Erro ao buscar dados locais:", error);
      setError(true);
    }
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
