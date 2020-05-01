import React from "react";
import { Tile } from "./tile";
import renderer from "react-test-renderer";

describe("<Tile />", () => {
  it("matches snapshot", () => {
    const tree = renderer.create(<Tile />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
