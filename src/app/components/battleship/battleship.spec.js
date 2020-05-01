import React from "react";
import Battleship from "./battleship";
import renderer from "react-test-renderer";
import { MemoryRouter } from "react-router-dom";

describe("<Battleship/>", () => {
  it("matches snapshot", () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <Battleship />
        </MemoryRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
