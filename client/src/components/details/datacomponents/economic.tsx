import { CostOfLiving, JobMarket, Taxes } from "@/components/types/CountryDetailsData";
import React from "react";

interface EconomicDataProps {
  jobMarket: JobMarket[];
  taxes: Taxes[];
  costOfLiving: CostOfLiving[];
}

const EconomyComponent: React.FC<EconomicDataProps> = ({ jobMarket, taxes, costOfLiving }) => {
  if (!jobMarket.length || !taxes.length || !costOfLiving.length) {
    return <p>No economic data available.</p>;
  }

  const { average_salary, major_industries, unemployment_rate, work_permit_requirements } = jobMarket[0];
  const { income_tax_rate, sales_tax_rate, property_tax_rate, double_taxation_treaties, tax_filing_process } = taxes[0];
  const { average_food_cost, average_transportation_cost, average_utilities_cost, average_entertainment_cost } =
    costOfLiving[0];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Economic Data</h2>
      <div className="mb-4">
        <h3 className="text-xl font-semibold">Job Market</h3>
        <p>
          <b>Average Salary:</b> ${average_salary}
        </p>
        <p>
          <b>Major Industries:</b> {major_industries}
        </p>
        <p>
          <b>Unemployment Rate:</b> {unemployment_rate}%
        </p>
        <p>
          <b>Work Permit Requirements:</b> {work_permit_requirements}
        </p>
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-semibold">Taxes</h3>
        <p>
          <b>Income Tax Rate:</b> {income_tax_rate}%
        </p>
        <p>
          <b>Sales Tax Rate:</b> {sales_tax_rate}%
        </p>
        <p>
          <b>Property Tax Rate:</b> {property_tax_rate}%
        </p>
        <p>
          <b>Double Taxation Treaties:</b> {double_taxation_treaties}
        </p>
        <p>
          <b>Tax Filing Process:</b> {tax_filing_process}
        </p>
      </div>
      <div>
        <h3 className="text-xl font-semibold">Cost of Living</h3>
        <p>
          <b>Average Food Cost:</b> ${average_food_cost}
        </p>
        <p>
          <b>Average Transportation Cost:</b> ${average_transportation_cost}
        </p>
        <p>
          <b>Average Utilities Cost:</b> ${average_utilities_cost}
        </p>
        <p>
          <b>Average Entertainment Cost:</b> ${average_entertainment_cost}
        </p>
      </div>
    </div>
  );
};

export default EconomyComponent;
