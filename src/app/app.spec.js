import React from "react";
import App from "./app";
import renderer from "react-test-renderer";
import { MemoryRouter } from "react-router-dom";

describe("<App/>", () => {
  it("matches snapshot", () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <App />
        </MemoryRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
