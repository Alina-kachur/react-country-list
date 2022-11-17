export interface ICountryAPI {
  flags: ICountryAPIFlag;
  name: ICountryAPIName;
  capital: string[];
  region: string;
  area: number;
  population: number;
}
export interface ICountryAPIFlag {
  png: string;
  svg: string;
}
export interface ICountryAPIName {
  common: string;
  official: string;
  nativeName: ICountryAPINativeName;
}
export interface ICountryAPINativeName {
  spa?: ICountryAPINativeNameLanguage;
}

export interface ICountryAPINativeNameLanguage {
  official: string;
  common: string;
}
export interface ICountry {
  flag: string;
  name: string;
  capital: string;
  population: number;
  area: number;
  region: string;
}
export enum Color {
  Primary = "primary",
  Secondary = "secondary",
  Success = "success",
  Danger = "danger",
  Warning = "warning",
  Info = "info",
  Light = "light",
  Dark = "dark",
}
export type BadgeLabel = "area" | "population";
