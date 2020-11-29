import React from "react";
import WeatherDetails from "components/WeatherDetails";

export default {
  title: "WeatherDetails",
  component: WeatherDetails,
};

export const WeatherDetailsExample = () => (
  <WeatherDetails humidity={50} wind={10} />
);
