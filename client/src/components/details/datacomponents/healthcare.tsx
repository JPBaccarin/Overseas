import { Healthcare } from "@/components/types/CountryDetailsData";

interface HealthcareProps {
  data: Healthcare[];
}
export const HealthcareComponent: React.FC<HealthcareProps> = ({ data }) => {
  return (
    <div className="">
      <h2 className="text-2xl font-bold mb-4">Healthcare</h2>
      {data.map((healthcare, index) => (
        <div key={index}>
          <div className="mb-2">
            <strong>Healthcare System: </strong>
            {healthcare.system_type}
          </div>
          <div className="mb-2">
            <strong>Insurance Requirements: </strong>
            {healthcare.insurance_requirements}
          </div>
          <div className="mb-2">
            <strong>Average Costs: </strong>
            {healthcare.average_cost}
          </div>
          <div className="mb-2">
            <strong>Hospital Quality Overview: </strong>
            {healthcare.hospitals_quality}
          </div>
          <div className="mb-2">
            <strong>Emergency Numbers:</strong>
            {healthcare.emergency_numbers}
          </div>

          {index < data.length - 1 && <hr className="my-4" />}
        </div>
      ))}
    </div>
  );
};
