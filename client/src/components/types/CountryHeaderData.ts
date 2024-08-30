export interface CountryHeaderData {
  name: {
    common: string;
  };
  capital: string[];
  region: string;
  cca2: string;
  cca3: string;
  area: number;
  borders: string[];
  idd: {
    root: string;
    suffixes: string[];
  };
  cioc: string;
  currencies: {
    [key: string]: string;
  };
  flags: string[];
  altSpellings: string[];
  capitalInfo: any;
  car: any;
  coatOfArms: {
    svg: string;
  };
  continents: string[];
  demonyms: any;
  fifa: string;
  gini: {
    [key: number]: any;
  };
  independent: boolean;
  landlocked: boolean;
  languages: {
    [key: string]: string;
  };
  latlng: number[];
  maps: {
    googleMaps: string;
  };
  population: number;
  postalCode: {
    format: string;
  };
  startOfWeek: string;
  status: string;
  timezones: string[];
  tld: string[];
  unMember: boolean;
}
