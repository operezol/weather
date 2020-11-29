import React from "react";
import PropTypes from "prop-types";
import {
  WiCloud,
  WiDayCloudy,
  WiDayFog,
  WiDaySunny,
  WiRain,
} from "react-icons/wi";
import { IconContext } from "react-icons";

const IconState = ({ state }) => {
  const stateByName = {
    cloud: WiCloud,
    cloudy: WiDayCloudy,
    fog: WiDayFog,
    sunny: WiDaySunny,
    rain: WiRain,
  };

  const StateByName = stateByName[state];

  return (
    <>
      <IconContext.Provider value={{ size: "4em" }}>
        <StateByName />
      </IconContext.Provider>
    </>
  );
};

export const validValues = ["cloud", "cloudy", "fog", "sunny", "rain"];

IconState.propTypes = {
  state: PropTypes.oneOf(validValues).isRequired,
};

export default IconState;
