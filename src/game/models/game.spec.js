import Game from "./game";
import shipData from "game/models/ships.data";
import { EMPTY } from "app/constants/game";
import Ship from "./ship";

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
      board.forEach(row => {
        expect(row).toBeInstanceOf(Array);
        expect(row).toHaveLength(boardSize);
      });
    });

    it("places ship in board", () => {
      const { ships, board } = Game.setup(boardSize);

      Object.keys(ships).forEach(shipId => {
        expect(board.flat()).toContain(shipId);
      });

      expect(board.flat()).toContain(EMPTY);
    });
  });

  describe("createShipsFromData(data)", () => {
    it("returns ships", () => {
      const ships = Game.createShipsFromData(shipData.data);

      expect(ships).toBeInstanceOf(Object);
      expect(Object.keys(ships)).toHaveLength(shipCount);
      Object.values(ships).forEach(ship => expect(ship).toBeInstanceOf(Ship));
    });
  });

  describe("createEmptyBoard(size)", () => {
    it("returns board", () => {
      const board = Game.createEmptyBoard(boardSize);

      expect(board).toBeInstanceOf(Array);
      expect(board).toHaveLength(boardSize);
      board.forEach(row => {
        expect(row).toBeInstanceOf(Array);
        expect(row).toHaveLength(boardSize);
      });
    });
  });

  describe("fillBoardWithShips(board, ships)", () => {
    it("places ships in board", () => {
      const board = [
        [EMPTY, EMPTY, EMPTY],
        [EMPTY, EMPTY, EMPTY],
        [EMPTY, EMPTY, EMPTY],
      ];
      const shipId = "abcde";
      const ships = {
        [shipId]: new Ship({ id: shipId, size: 2 }),
      };

      Game.fillBoardWithShips(board, ships);

      Object.keys(ships).forEach(shipId => {
        expect(board.flat()).toContain(shipId);
      });

      expect(board.flat()).toContain(EMPTY);
    });
  });

  describe("rondomPosition(board,ship)", () => {
    it("returns empty positions where ship fits", () => {
      const shipId_1 = "12345";
      const shipId_2 = "67890";
      const shipId_3 = "abcde";
      const shipId_4 = "testy";

      const board = [
        [shipId_1, shipId_1, shipId_1],
        [EMPTY, shipId_2, shipId_3],
        [EMPTY, shipId_2, shipId_3],
      ];

      const ship = new Ship({ size: 2, id: shipId_4 });

      const { row, col, h, v } = Game.randomPosition(board, ship);

      expect(row).toBeGreaterThan(0);
      expect(row).toBeLessThan(3);
      expect(col).toBe(0);
      expect(h).toBe(0);
      expect(v).not.toBe(0);
      expect(v === -1 || v === +1).toBeTruthy();
    });
  });
});
