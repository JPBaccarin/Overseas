import React from "react";
import { Visa } from "@/components/types/CountryDetailsData";

interface VisaComponentProps {
  data: Visa[];
}

export const VisaComponent: React.FC<VisaComponentProps> = ({ data }) => {
  if (!data || data.length === 0) return null;

  return (
    <div className="">
      <h2 className="text-2xl font-bold mb-4">Visas</h2>
      {data.map((visa, index) => (
        <div key={index} className="mb-4">
          <p>
            <strong>Type:</strong> {visa.type}
          </p>
          <p>
            <strong>Requirements:</strong> {visa.requirements}
          </p>
          <p>
            <strong>Application Process:</strong> {visa.application_process}
          </p>
          <p>
            <strong>Processing Time:</strong> {visa.processing_time}
          </p>
          <p>
            <strong>Cost:</strong> ${visa.cost}
          </p>
          <p>
            <strong>Validity:</strong> {visa.validity}
          </p>
        </div>
      ))}
    </div>
  );
};
