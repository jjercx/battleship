import React from "react";
import Header from "./header";
import renderer from "react-test-renderer";

describe("<Header/>", () => {
  it("matches snapshot", () => {
    const tree = renderer.create(<Header />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
