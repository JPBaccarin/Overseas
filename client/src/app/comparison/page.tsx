import SelectCountries from "@/components/comparison/multiCountrySelect";

export default function Page() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Country Comparison</h1>
      <SelectCountries />
    </div>
  );
}