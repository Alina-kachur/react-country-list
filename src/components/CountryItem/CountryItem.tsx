import { Color, ICountry } from "../../types";
import { Badge } from "../Badge/Badge";

export interface IProps {
  countries: ICountry[];
}

export const CountryItem = ({ countries }: IProps) => {
  return (
    <>
      {countries.map(({ flag, name, capital, region, area, population }) => (
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <img src={flag} style={{ width: "180px" }} />
          <p className="fs-5">{name}</p>
          <p className="fs-5">{capital}</p>
          <p className="fs-5">{region}</p>
          <Badge badgelabel={"area"} color={Color.Primary}>
            {area}
          </Badge>
          <Badge badgelabel={"population"} color={Color.Secondary}>
            {population}
          </Badge>
        </li>
      ))}
    </>
  );
};
