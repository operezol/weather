import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CityList from "components/CityList";

const cities = [
  { city: "Barcelona", country: "Catalunya" },
  { city: "Sant Adrià de Besòs", country: "Catalunya" },
];

test("CityList Render", async () => {
  const { findAllByRole } = render(
    <CityList cities={cities} onCityClick={() => {}} />
  );
  const cityItems = await findAllByRole("listitem");
  expect(cityItems).toHaveLength(2);
});
test("CityList Click on item", async () => {
  const fnClickOnItem = jest.fn();
  const { findAllByRole } = render(
    <CityList cities={cities} onCityClick={fnClickOnItem} />
  );
  const cityItems = await findAllByRole("listitem");
  fireEvent.click(cityItems[0]);
  expect(fnClickOnItem).toHaveBeenCalledTimes(1);
});
