import React from "react";
import Grid from "./grid";
import renderer from "react-test-renderer";
import { EMPTY } from "app/constants/game";

describe("<Grid />", () => {
  describe("with size", () => {
    it("matches snapshot", () => {
      const tree = renderer.create(<Grid />).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe("without size", () => {
    it("matches snapshot", () => {
      const store = {
        game: {
          board: [[EMPTY]],
        },
      };
      const tree = renderer.create(<Grid store={store} />).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
