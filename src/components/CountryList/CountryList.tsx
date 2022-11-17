import { ICountry } from "../../types";
import { CountryItem } from "../CountryItem/CountryItem";

export interface IProps {
  countries: ICountry[];
}

export const CountryList = ({ countries }: IProps) => {
  return (
    <ul className="list-group">
      {countries.map((country) => (
        <CountryItem countries={countries} key={country.name} />
      ))}
    </ul>
  );
};
