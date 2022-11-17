import { ICountry, ICountryAPI } from "../types/index";

export const transformCountries = (countries: ICountryAPI[]): ICountry[] => {
  return countries.map(
    ({
      name: { common },
      capital,
      flags: { svg },
      region,
      area,
      population,
    }) => ({
      name: common,
      capital: capital[0],
      flag: svg,
      region: region,
      area: area,
      population: population,
    })
  );
};
