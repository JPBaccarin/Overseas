import ComparisonClient from "@/components/comparison/ComparisonClient";
import countriesData from "@/app/data/countries.json";

interface PageProps {
  params: {
    country: string[];
  };
}

// Gerar parâmetros estáticos para todas as combinações de países
export function generateStaticParams() {
  const countries = countriesData.map((c: any) => c.id);
  const params: { country: string[] }[] = [];

  // Gerar combinações de 2 países
  for (let i = 0; i < countries.length; i++) {
    for (let j = i + 1; j < countries.length; j++) {
      params.push({ country: [countries[i], countries[j]] });
    }
  }

  return params;
}

export default function Page({ params }: PageProps) {
  const [country1, country2] = params.country;

  return <ComparisonClient country1={country1} country2={country2} />;
}
