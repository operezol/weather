import React from "react";
import { render } from "@testing-library/react";
import Weather from "components/Weather/";
test("Weather Render", async () => {
  const temp = 10;
  const { findByRole } = render(<Weather temp={temp} state="sunny" />);
  const weatherComponent = await findByRole("heading");
  expect(weatherComponent).toHaveTextContent(10);
});
