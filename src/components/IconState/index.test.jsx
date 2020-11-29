import React from "react";
import { render } from "@testing-library/react";
import IconState from "components/IconState/";
test("IconState Render", async () => {
  const { findByRole } = render(<IconState state="sunny" />);
});
