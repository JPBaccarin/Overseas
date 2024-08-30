import React from "react";
import { Housing } from "@/components/types/CountryDetailsData";
interface HousingComponentProps {
  data: Housing[];
}

export const HousingComponent: React.FC<HousingComponentProps> = ({ data }) => {
  if (!data || data.length === 0) return null;

  return (
    <div className="">
      <h2 className="text-2xl font-bold mb-4">Housing</h2>
      {data.map((housing, index) => (
        <div key={index} className="mb-4">
          <p>
            <strong>Average Rent:</strong> ${housing.average_rent}
          </p>
          <p>
            <strong>Average Property Price:</strong> ${housing.average_property_price}
          </p>
          <p>
            <strong>Popular Areas:</strong> {housing.popular_areas}
          </p>
          <p>
            <strong>Rental Process:</strong> {housing.rental_process}
          </p>
          <p>
            <strong>Buying Process:</strong> {housing.buying_process}
          </p>
        </div>
      ))}
    </div>
  );
};
