import React from "react";
import CityList from ".";
import "typeface-roboto";
export default {
  title: "CityList",
  component: CityList,
};
export const CityListExample = () => (
  <CityList
    cities={[
      { city: "Barcelona", country: "Catalunya" },
      { city: "Sant Adrià de Besòs", country: "Catalunya" },
    ]}
  />
);
