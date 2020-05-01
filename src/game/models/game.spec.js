import Game from "./game";
import shipData from "game/models/ships.data";
import { EMPTY } from "app/constants/game";

jest.mock("game/models/ships.data");

describe("Game Class", () => {
  let boardSize, shipCount, shipSize;
  beforeAll(() => {
    shipCount = 2;
    shipSize = 3;
    boardSize = 3;
    shipData.setCount(shipCount);
    shipData.setSize(shipSize);
  });

  describe("setup(boardSize)", () => {
    it("returns ships", () => {
      const { ships } = Game.setup(boardSize);

      expect(ships).toBeInstanceOf(Object);
      expect(Object.keys(ships)).toHaveLength(shipCount);
    });

    it("returns board", () => {
      const { board } = Game.setup(boardSize);

      expect(board).toBeInstanceOf(Array);
      expect(board).toHaveLength(boardSize);
      expect(board[0]).toHaveLength(boardSize);
    });

    it("places ship in board", () => {
      const { ships, board } = Game.setup(boardSize);
      const shipId = Object.keys(ships)[0];

      console.log("board", board);

      expect(board.flat()).toContain(shipId);
      expect(board.flat()).toContain(EMPTY);
    });
  });
});
