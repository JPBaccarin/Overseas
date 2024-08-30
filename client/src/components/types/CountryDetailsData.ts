export interface CostOfLiving {
  average_food_cost: number;
  average_transportation_cost: number;
  average_utilities_cost: number;
  average_entertainment_cost: number;
}

export interface CultureAndLanguage {
  official_languages: string;
  common_languages: string;
  cultural_norms: string;
  public_holidays: string;
}

export interface Documentation {
  required_documents: string;
  registration_process: string;
  document_issuance: string;
}

export interface Education {
  system_type: string;
  average_cost: number;
  top_schools: string;
  university_admission_process: string;
  language_requirements: string;
}

export interface Healthcare {
  system_type: string;
  insurance_requirements: string;
  average_cost: number;
  hospitals_quality: string;
  emergency_numbers: string;
}

export interface Housing {
  average_rent: number;
  average_property_price: number;
  popular_areas: string;
  rental_process: string;
  buying_process: string;
}

export interface JobMarket {
  major_industries: string;
  average_salary: number;
  unemployment_rate: number;
  work_permit_requirements: string;
}

export interface Safety {
  crime_rate: number;
  safety_tips: string;
  emergency_contacts: string;
  safe_areas: string;
}

export interface SocialConnection {
  expat_communities: string;
  social_groups: string;
  local_events: string;
}

export interface Taxes {
  income_tax_rate: number;
  sales_tax_rate: number;
  property_tax_rate: number;
  double_taxation_treaties: string;
  tax_filing_process: string;
}

export interface Transportation {
  public_transportation: string;
  average_cost: number;
  driving_requirements: string;
  ride_sharing_options: string;
}

export interface Visa {
  type: string;
  requirements: string;
  application_process: string;
  processing_time: string;
  cost: number;
  validity: string;
}

export interface CountryDetails {
  id: string;
  name: string;
  capital: string;
  iso_code: string;
  continent: string;
  official_language: string;
  currency: string;
  population: number;
  area: number;
  cost_of_livings: CostOfLiving[];
  culture_and_languages: CultureAndLanguage[];
  documentations: Documentation[];
  education: Education[];
  healthcares: Healthcare[];
  housings: Housing[];
  job_markets: JobMarket[];
  safety: Safety[];
  social_connections: SocialConnection[];
  taxes: Taxes[];
  transportation: Transportation[];
  visas: Visa[];
}
