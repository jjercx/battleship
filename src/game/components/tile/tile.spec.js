import React from "react";
import { Tile } from "./tile";
import renderer from "react-test-renderer";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("<Tile />", () => {
  it("matches snapshot", () => {
    const tree = renderer.create(<Tile />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  describe("when its touched", () => {
    it("reacts if touched for the first time", async () => {
      const handleClick = jest.fn();
      const row = 0;
      const col = 0;

      render(<Tile tileTouch={handleClick} col={col} row={row} />);
      fireEvent.click(screen.getByTestId("tile"));
      // await waitFor(() => screen.getByTestId("token")); // FIXME: PROBLEM WITH WAIT FOR

      expect(handleClick).toBeCalledTimes(1);
      expect(handleClick).toHaveBeenCalledWith({ row, col });
    });
    it("does nothing if already touched", () => {});
  });
});
