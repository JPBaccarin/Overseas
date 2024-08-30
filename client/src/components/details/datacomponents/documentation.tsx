import { Documentation } from "@/components/types/CountryDetailsData";

interface DocumentationProps {
  data: Documentation[];
}

export const DocumentationComponent: React.FC<DocumentationProps> = ({ data }) => {
  return (
    <div className="">
      <h2 className="text-2xl font-bold mb-4">Documentation</h2>
      {data.map((doc, index) => (
        <div key={index}>
          <div className="mb-2">
            <strong>Required Documents: </strong>
            {doc.required_documents}
          </div>
          <div className="mb-2">
            <strong>Registration Process: </strong>
            {doc.registration_process}
          </div>
          <div className="mb-2">
            <strong>Document Issuance: </strong>
            {doc.document_issuance}
          </div>
          {index < data.length - 1 && <hr className="my-4" />} {/* Divisor entre múltiplos elementos */}
        </div>
      ))}
    </div>
  );
};
