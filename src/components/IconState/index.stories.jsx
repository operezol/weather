import React from "react";
import IconState from "components/IconState";
import "typeface-roboto";
export default {
  title: "IconState",
  component: IconState,
};
export const IconStateCloudExample = () => <IconState state="cloud" />;
export const IconStateCloudyExample = () => <IconState state="cloudy" />;
export const IconStateFogExample = () => <IconState state="fog" />;
export const IconStateSunnyExample = () => <IconState state="sunny" />;
export const IconStateRainExample = () => <IconState state="rain" />;
