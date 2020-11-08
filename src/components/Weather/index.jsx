import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";
import {
  WiCloud,
  WiDayCloudy,
  WiDayFog,
  WiDaySunny,
  WiRain,
} from "react-icons/wi";
import { IconContext } from "react-icons";

const Weather = ({ temp, state }) => {
  const stateByName = {
    cloud: WiCloud,
    cloudy: WiDayCloudy,
    fog: WiDayFog,
    sunny: WiDaySunny,
    rain: WiRain,
  };
  const renderState = (state) => {
    const Icon = stateByName[state];
    return <Icon />;
  };
  return (
    <>
      <IconContext.Provider value={{ size: "4em" }}>
        {renderState(state)}
      </IconContext.Provider>

      <Typography variant="h2" display={"inline"}>
        {temp}
      </Typography>
    </>
  );
};

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  state: PropTypes.string.isRequired,
};

export default Weather;
