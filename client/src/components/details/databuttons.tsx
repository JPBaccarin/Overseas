import React from "react";
import { Button } from "@/components/ui/button";

interface DataButtonsProps {
  setDataType: (type: string) => void;
}
export const DataButtons: React.FC<DataButtonsProps> = ({ setDataType }) => (
  <div className=" py-2 border-b grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 mb-4">
    {[
      "general",
      "economic",
      "culture_and_language",
      "documentation",
      "education",
      "healthcare",
      "housing",
      "safety",
      "social_connections",
      "transportation",
      "visas",
      "images",
    ].map((type) => (
      <Button key={type} className="bg-background rounded-none border-x" onClick={() => setDataType(type)}>
        {type.charAt(0).toUpperCase() + type.slice(1).replace(/_/g, " ")}
      </Button>
    ))}
  </div>
);
