import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";
import IconState, { validValues } from "components/IconState";

const Weather = ({ temp, state }) => {
  return (
    <>
      <IconState state={state} />
      <Typography variant="h2" display={"inline"}>
        {temp}
      </Typography>
    </>
  );
};

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  state: PropTypes.oneOf(validValues).isRequired,
};

export default Weather;
