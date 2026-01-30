"use client";
import React, { useEffect, useState } from "react";
import { CountryDetails } from "@/components/types/CountryDetailsData";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import countriesData from "@/app/data/countries.json";

interface ComparisonClientProps {
  country1: string;
  country2: string;
}

interface ComparisonData {
  country1: CountryDetails;
  country2: CountryDetails;
}

export default function ComparisonClient({ country1, country2 }: ComparisonClientProps) {
  const [comparisonData, setComparisonData] = useState<ComparisonData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (country1 && country2) {
      try {
        // Normalizar nomes dos países para busca
        const normalizedCountry1 = country1.toLowerCase().trim();
        const normalizedCountry2 = country2.toLowerCase().trim();

        // Buscar dados dos países no arquivo JSON local
        const data1 = countriesData.find(
          (c: any) =>
            c.name.toLowerCase() === normalizedCountry1 ||
            c.id.toLowerCase() === normalizedCountry1 ||
            c.iso_code.toLowerCase() === normalizedCountry1,
        );

        const data2 = countriesData.find(
          (c: any) =>
            c.name.toLowerCase() === normalizedCountry2 ||
            c.id.toLowerCase() === normalizedCountry2 ||
            c.iso_code.toLowerCase() === normalizedCountry2,
        );

        if (data1 && data2) {
          setComparisonData({
            country1: data1 as CountryDetails,
            country2: data2 as CountryDetails,
          });
          console.log("Dados de comparação carregados:", { data1, data2 });
        } else {
          setError("Um ou ambos os países não foram encontrados nos dados locais.");
          console.error("Países não encontrados:", { country1, country2 });
        }
      } catch (error) {
        console.error("Erro ao buscar dados de comparação:", error);
        setError("Erro ao carregar dados de comparação.");
      }
    }
  }, [country1, country2]);

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center text-red-500">
          <p>{error}</p>
          <Link href="/comparison">
            <Button className="mt-4">Voltar para comparação</Button>
          </Link>
        </div>
      </div>
    );
  }

  if (!comparisonData) {
    return <div className="container mx-auto px-4 py-8 text-center">Carregando dados de comparação...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Comparing Countries</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Detalhes do Country 1 */}
        <div className="flex-1 bg-white border rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">{comparisonData.country1.name}</h2>
          <p>
            <span className="font-medium">Capital:</span> {comparisonData.country1.capital}
          </p>
          <p>
            <span className="font-medium">ISO Code:</span> {comparisonData.country1.iso_code}
          </p>
          <p>
            <span className="font-medium">Continent:</span> {comparisonData.country1.continent}
          </p>
          <p>
            <span className="font-medium">Official Language:</span> {comparisonData.country1.official_language}
          </p>
          <p>
            <span className="font-medium">Currency:</span> {comparisonData.country1.currency}
          </p>
          <p>
            <span className="font-medium">Population:</span> {comparisonData.country1.population?.toLocaleString()}
          </p>
          <p>
            <span className="font-medium">Area:</span> {comparisonData.country1.area?.toLocaleString()} km²
          </p>
          <div className="mt-4">
            <Link href={`/details/${comparisonData.country1.id}`}>
              <Button>More details about {comparisonData.country1.name}</Button>
            </Link>
          </div>
        </div>

        {/* Detalhes do Country 2 */}
        <div className="flex-1 bg-white border rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">{comparisonData.country2.name}</h2>
          <p>
            <span className="font-medium">Capital:</span> {comparisonData.country2.capital}
          </p>
          <p>
            <span className="font-medium">ISO Code:</span> {comparisonData.country2.iso_code}
          </p>
          <p>
            <span className="font-medium">Continent:</span> {comparisonData.country2.continent}
          </p>
          <p>
            <span className="font-medium">Official Language:</span> {comparisonData.country2.official_language}
          </p>
          <p>
            <span className="font-medium">Currency:</span> {comparisonData.country2.currency}
          </p>
          <p>
            <span className="font-medium">Population:</span> {comparisonData.country2.population?.toLocaleString()}
          </p>
          <p>
            <span className="font-medium">Area:</span> {comparisonData.country2.area?.toLocaleString()} km²
          </p>
          <div className="mt-4">
            <Link href={`/details/${comparisonData.country2.id}`}>
              <Button>More details about {comparisonData.country2.name}</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
