import React from "react";
import Stat from "./stat";
import renderer from "react-test-renderer";

describe("<Stat />", () => {
  it("matches snapshot", () => {
    const tree = renderer.create(<Stat />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
