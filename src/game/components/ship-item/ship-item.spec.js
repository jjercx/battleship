import React from "react";
import ShipItem from "./ship-item";
import renderer from "react-test-renderer";
import Ship from "game/models/ship";

describe("<ShipItem />", () => {
  describe("without ship", () => {
    it("matches snapshot", () => {
      const tree = renderer.create(<ShipItem />).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe("with ship", () => {
    it("matches snapshot", () => {
      const ship = new Ship({ size: 4 });
      const tree = renderer.create(<ShipItem ship={ship} />).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
