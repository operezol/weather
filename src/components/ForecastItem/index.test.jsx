import React from "react";
import { render } from "@testing-library/react";
import ForecastItem from "components/ForecastItem";
test("ForecastItem Render", async () => {
  const { findByRole } = render(
    <ForecastItem weekDay={""} state="sunny" hour={10} temperature={10} />
  );
});
