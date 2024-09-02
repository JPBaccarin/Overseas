"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { CountryDetails } from "@/components/types/CountryDetailsData"; // Caminho correto para o arquivo de tipagens
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface PageProps {
  params: {
    country: string[];
  };
}

interface ComparisonData {
  country1: CountryDetails;
  country2: CountryDetails;
}

export default function Page({ params }: PageProps) {
  const [country1, country2] = params.country;
  const [comparisonData, setComparisonData] = useState<ComparisonData | null>(null);

  useEffect(() => {
    if (country1 && country2) {
      axios
        .get<ComparisonData>(`http://localhost:3002/api/compare-countries/${country1}/${country2}`)
        .then((response) => {
          setComparisonData(response.data);
          console.log("Comparison data:", response.data);
        })
        .catch((error) => {
          console.error("Error fetching comparison data:", error);
        });
    }
  }, [country1, country2]);

  if (!comparisonData) {
    return <div>Loading comparison data...</div>;
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
            <span className="font-medium">Population:</span> {comparisonData.country1.population}
          </p>
          <p>
            <span className="font-medium">Area:</span> {comparisonData.country1.area} km²
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
            <span className="font-medium">Population:</span> {comparisonData.country2.population}
          </p>
          <p>
            <span className="font-medium">Area:</span> {comparisonData.country2.area} km²
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
