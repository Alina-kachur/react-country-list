import { BadgeLabel, Color } from "../../types";
import { ReactNode } from "react";

export interface IProps {
  badgelabel: BadgeLabel;
  color: Color;
  children: ReactNode;
}

export const Badge = ({ badgelabel, color, children }: IProps) => {
  return (
    <span
      className={`badge bg-${color} fs-6`}
      style={{ height: "40px", width: "210px" }}
    >
      {badgelabel}: {children}
    </span>
  );
};
