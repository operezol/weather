import React from "react";
import CityList from "components/CityList";
import { action } from "@storybook/addon-actions";
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
    onCityClick={action("click en city")}
  />
);
