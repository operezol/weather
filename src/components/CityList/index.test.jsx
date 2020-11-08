import React from "react";
import { render } from "@testing-library/react";
import CityList from "components/CityList";
test("CityList Render", async () => {
  const { findAllByRole } = render(
    <CityList
      cities={[
        { city: "Barcelona", country: "Catalunya" },
        { city: "Sant Adrià de Besòs", country: "Catalunya" },
      ]}
    />
  );
  const CityItems = await findAllByRole("listitem");
  expect(CityItems).toHaveLength(2);
});
