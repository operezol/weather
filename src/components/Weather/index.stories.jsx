import React from "react";
import Weather from "components/Weather";
export default {
  title: "Weather",
  component: Weather,
};
export const WeatherCloudExample = () => <Weather temp={"10"} state="cloud" />;
export const WeatherCloudyExample = () => (
  <Weather temp={"10"} state="cloudy" />
);
export const WeatherFogExample = () => <Weather temp={"10"} state="fog" />;
export const WeatherSunnyExample = () => <Weather temp={"10"} state="sunny" />;
export const WeatherRainExample = () => <Weather temp={"10"} state="rain" />;
