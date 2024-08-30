import React from "react";
import { Safety } from "@/components/types/CountryDetailsData";

interface SafetyComponentProps {
  data: Safety[];
}

export const SafetyComponent: React.FC<SafetyComponentProps> = ({ data }) => {
  if (!data || data.length === 0) return null;

  return (
    <div className="">
      <h2 className="text-2xl font-bold mb-4">Safety</h2>
      {data.map((safety, index) => (
        <div key={index} className="mb-4">
          <p>
            <strong>Crime Rate:</strong> {safety.crime_rate}
          </p>
          <p>
            <strong>Safety Tips:</strong> {safety.safety_tips}
          </p>
          <p>
            <strong>Emergency Contacts:</strong> {safety.emergency_contacts}
          </p>
          <p>
            <strong>Safe Areas:</strong> {safety.safe_areas}
          </p>
        </div>
      ))}
    </div>
  );
};
