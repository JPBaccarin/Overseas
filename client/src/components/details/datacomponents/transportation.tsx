import React from "react";
import { Transportation } from "@/components/types/CountryDetailsData";

interface TransportationComponentProps {
  data: Transportation[];
}

export const TransportationComponent: React.FC<TransportationComponentProps> = ({ data }) => {
  if (!data || data.length === 0) return null;

  return (
    <div className="">
      <h2 className="text-2xl font-bold mb-4">Transportation</h2>
      {data.map((transportation, index) => (
        <div key={index} className="mb-4">
          <p>
            <strong>Public Transportation:</strong> {transportation.public_transportation}
          </p>
          <p>
            <strong>Average Cost:</strong> ${transportation.average_cost}
          </p>
          <p>
            <strong>Driving Requirements:</strong> {transportation.driving_requirements}
          </p>
          <p>
            <strong>Ride Sharing Options:</strong> {transportation.ride_sharing_options}
          </p>
        </div>
      ))}
    </div>
  );
};
