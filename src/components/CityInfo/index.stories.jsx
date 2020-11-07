import React from "react";
import CityInfo from "./";
import "typeface-roboto";
export default {
  title: "CityInfo",
  component: CityInfo,
};
export const CityExample = () => (
  <CityInfo city={"Barcelona"} country={"Catalunya"} />
);
