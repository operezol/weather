import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import CityInfo from "components/CityInfo";
import Weather from "components/Weather";

const RenderCityAndCountry = (cityAndCountry) => {
  const { city, country } = cityAndCountry;
  return (
    <li key={city}>
      <Grid container justify="center" alignItems="center">
        <Grid item sm={8} xs={12}>
          <CityInfo city={city} country={country} />
        </Grid>
        <Grid item sm={4} xs={12}>
          <Weather temp={10} state="cloudy" />
        </Grid>
      </Grid>
    </li>
  );
};

const CityList = ({ cities }) => {
  return (
    <ul>
      {cities.map((cityAndCountry) => RenderCityAndCountry(cityAndCountry))}
    </ul>
  );
};

CityList.propTypes = {
  cities: PropTypes.array.isRequired,
};

export default CityList;
