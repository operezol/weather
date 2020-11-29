import React from "react";
import ForecastItem from "components/ForecastItem";

export default {
  title: "ForecastItem",
  component: ForecastItem,
};

export const ForecastItemExample = () => (
  <ForecastItem weekDay={"Monday"} hour={10} state={"sunny"} temperature={23} />
);
