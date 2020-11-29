import React from "react";
import CityInfo from "components/CityInfo";
export default {
  title: "CityInfo",
  component: CityInfo,
};
export const CityExample = () => (
  <CityInfo city={"Barcelona"} country={"Catalunya"} />
);
