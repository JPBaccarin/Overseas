import React from "react";
import { SocialConnection } from "@/components/types/CountryDetailsData";

interface SocialConnectionsComponentProps {
  data: SocialConnection[];
}

export const SocialConnectionsComponent: React.FC<SocialConnectionsComponentProps> = ({ data }) => {
  if (!data || data.length === 0) return null;

  return (
    <div className="">
      <h2 className="text-2xl font-bold mb-4">Social Connections</h2>
      {data.map((connection, index) => (
        <div key={index} className="mb-4">
          <p>
            <strong>Expat Communities:</strong> {connection.expat_communities}
          </p>
          <p>
            <strong>Social Groups:</strong> {connection.social_groups}
          </p>
          <p>
            <strong>Local Events:</strong> {connection.local_events}
          </p>
        </div>
      ))}
    </div>
  );
};
