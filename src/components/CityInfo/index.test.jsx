import React from "react";
import { render } from "@testing-library/react";
import CityInfo from "components/CityInfo";
test("CityInfo Render", async () => {
  const city = "Barcelona";
  const country = "Catalunya";
  const { findAllByRole } = render(<CityInfo city={city} country={country} />);
  const cityAndCountryComponents = await findAllByRole("heading");
  expect(cityAndCountryComponents[0]).toHaveTextContent(city);
  expect(cityAndCountryComponents[1]).toHaveTextContent(country);
});
