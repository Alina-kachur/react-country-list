import React from "react";
import { CountryList } from "./components/CountryList/CountryList";
import countries from "./country-data.json";
import { transformCountries } from "./mappers/transformCountries";

export const App = () => {
  const transformedCountries = transformCountries(countries);
  return (
    <div className="container">
      <CountryList countries={transformedCountries} />
    </div>
  );
};
