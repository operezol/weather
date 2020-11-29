import React from "react";
import { findAllByText, render } from "@testing-library/react";
import Forecast from "components/Forecast";

const forecastItemList = [
  { weekDay: "Monday", hour: 10, state: "sunny", temperature: 23 },
  { weekDay: "Tuesday", hour: 11, state: "sunny", temperature: 23 },
  { weekDay: "Wednesday", hour: 12, state: "sunny", temperature: 23 },
  { weekDay: "Thurdsday", hour: 13, state: "sunny", temperature: 23 },
];

test("Forecast Render", async () => {
  const { findAllByTestId } = render(
    <Forecast forecastItemList={forecastItemList} />
  );
  const forecasItems = await findAllByTestId("forecast-item-container");
  expect(forecasItems).toHaveLength(4);
});
