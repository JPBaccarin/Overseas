import DetailsClient from "@/components/details/DetailsClient";
import countriesData from "@/app/data/countries.json";

// Gerar parâmetros estáticos para todos os países
export function generateStaticParams() {
  return countriesData.map((country: any) => ({
    country: country.id,
  }));
}

export default function Page({ params }: { params: { country: string } }) {
  return <DetailsClient country={params.country} />;
}
