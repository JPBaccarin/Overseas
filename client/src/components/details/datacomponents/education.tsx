import { Education } from "@/components/types/CountryDetailsData";

interface EducationProps {
  data: Education[];
}

export const EducationComponent: React.FC<EducationProps> = ({ data }) => {
  return (
    <div className="">
      <h2 className="text-2xl font-bold mb-4">Education</h2>
      {data.map((edu, index) => (
        <div key={index}>
          <div className="mb-2">
            <strong>Education System: </strong>
            {edu.system_type}
          </div>
          <div className="mb-2">
            <strong>University Admission Process: </strong>
            {edu.university_admission_process}
          </div>
          <div className="mb-2">
            <strong>Average Costs: </strong>
            {edu.average_cost}
          </div>
          <div className="mb-2">
            <strong>Language Requirements: </strong>
            {edu.language_requirements}
          </div>
          <div>
            <strong>Top Schools: </strong>
            {edu.top_schools}
          </div>
          {index < data.length - 1 && <hr className="my-4" />}
        </div>
      ))}
    </div>
  );
};
