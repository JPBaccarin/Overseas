// components/GeneralInfo.tsx
import { CountryHeaderData } from "../../types/CountryHeaderData";

export default function GeneralInfo({ data }: { data: CountryHeaderData }) {
  return (
    <div className=" bg-white rounded-md">
      <h2 className="text-2xl font-bold mb-4">General Data</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
        <div>
          <p>
            <strong>Region:</strong> {data.region}
          </p>
          <p>
            <strong>Area:</strong> {data.area.toLocaleString()} km²
          </p>
          <p>
            <strong>Borders:</strong> {data.borders ? data.borders.join(", ") : "None"}
          </p>
          <p>
            <strong>Calling Codes:</strong> {data.idd.root + data.idd.suffixes.join(", ")}
          </p>
          <p>
            <strong>CIoC:</strong> {data.cioc}
          </p>
          <p>
            <strong>Currencies:</strong> {Object.keys(data.currencies).join(", ")}
          </p>
          <p>
            <strong>Alt Spellings:</strong> {data.altSpellings.join(", ")}
          </p>
          <p>
            <strong>Continents:</strong> {data.continents.join(", ")}
          </p>
          <p>
            <strong>Independent:</strong> {data.independent ? "Yes" : "No"}
          </p>
          <p>
            <strong>Landlocked:</strong> {data.landlocked ? "Yes" : "No"}
          </p>
        </div>
        <div>
          <p>
            <strong>Languages:</strong> {Object.values(data.languages).join(", ")}
          </p>
          <p>
            <strong>Latitude and Longitude:</strong> {data.latlng.join(", ")}
          </p>
          <p>
            <strong>Population:</strong> {data.population.toLocaleString()} inhabitants
          </p>
          <p>
            <strong>Postal Code Format:</strong> {data.postalCode.format}
          </p>
          <p>
            <strong>Start of Week:</strong> {data.startOfWeek}
          </p>
          <p>
            <strong>Status:</strong> {data.status}
          </p>
          <p>
            <strong>Timezones:</strong> {data.timezones.join(", ")}
          </p>
          <p>
            <strong>Top Level Domain:</strong> {data.tld.join(", ")}
          </p>
          <p>
            <strong>UN Member:</strong> {data.unMember ? "Yes" : "No"}
          </p>
        </div>
      </div>
      <div className="mt-4">
        <img src={data.coatOfArms.svg} alt={`${data.name.common} Coat of Arms`} className="w-56 h-auto " />
      </div>
    </div>
  );
}
