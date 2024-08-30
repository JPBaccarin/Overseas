import { CultureAndLanguage } from "@/components/types/CountryDetailsData";

interface CultureProps {
  data: CultureAndLanguage[];
}

export const CultureComponent: React.FC<CultureProps> = ({ data }) => {
  return (
    <div className="">
      <h2 className="text-2xl font-bold mb-4">Culture and Language</h2>
      {data.map((culture, index) => (
        <div key={index}>
          <div className="mb-2">
            <strong>Official Languages: </strong>
            {culture.official_languages}
          </div>
          <div className="mb-2">
            <strong>Common Languages: </strong>
            {culture.common_languages}
          </div>
          <div className="mb-2">
            <strong>Cultural Norms: </strong>
            {culture.cultural_norms}
          </div>
          <div className="mb-2">
            <strong>Public Holidays: </strong>
            {culture.public_holidays}
          </div>
          {index < data.length - 1 && <hr className="my-4" />} {/* Divisor entre múltiplos elementos */}
        </div>
      ))}
    </div>
  );
};
