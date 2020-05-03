import Game from "game/models/game";
import Ship from "game/models/ship";
import { onGameSetup, onTileTouch, watchForGameEnd } from "./game.sagas";
import { put, select } from "redux-saga/effects";
import { gameReady, gameUpdate, gameEnd } from "./game.actions";
import {
  getCell,
  getShip,
  getShots,
  getHits,
  getTurns,
  getSize,
  getShips,
} from "./game.reducer";
import { cloneableGenerator } from "@redux-saga/testing-utils";

jest.mock("game/models/game");

describe("game.sagas.js", () => {
  describe("* onGameSetup({ payload: boardSize })", () => {
    const setup = () => {
      const ship = new Ship({ size: 1, id: "tests" });
      const board = [[ship.id]];
      const ships = { [ship.id]: ship };

      return { ships, board };
    };

    let gameSetupMock;
    beforeAll(() => {
      gameSetupMock = jest.spyOn(Game, "setup").mockImplementation(setup);
    });

    beforeEach(() => {
      jest.clearAllMocks();
    });

    it("puts GAME_READY action", () => {
      const gen = onGameSetup({ payload: 1 });
      const res = setup();

      expect(gen.next().value).toEqual(select(getSize));

      const boardSize = 1;
      expect(gen.next(boardSize).value).toEqual(put(gameReady(res)));

      expect(gameSetupMock).toHaveBeenCalledTimes(1);
      expect(gameSetupMock).toHaveBeenCalledWith(boardSize);
    });

    it("calls Game.setup", () => {
      const gen = onGameSetup({ payload: 1 });
      gen.next();
      gen.next();
      expect(gameSetupMock).toHaveBeenCalledTimes(1);
    });

    afterAll(() => {
      gameSetupMock.mockRestore();
    });
  });

  describe("* onTileTouch({payload: {row, col}})", () => {
    it("gets data and dispatches game updates", () => {
      const row = 0;
      const col = 0;

      const onTileTouchGen = cloneableGenerator(onTileTouch)({
        payload: { row, col },
      });

      expect(onTileTouchGen.next().value).toEqual(select(getCell, row, col));

      const shipId = "abcde";
      expect(onTileTouchGen.next(shipId).value).toEqual(
        select(getShip, shipId)
      );

      const onTileWithShipGen = onTileTouchGen.clone();
      const onTileEmptyGen = onTileTouchGen.clone();

      const onTileWithShip = () => {
        const ship = new Ship({ id: shipId, size: 2 });
        expect(onTileWithShipGen.next(ship).value).toEqual(
          select(getShots, shipId)
        );

        const shots = 0;
        expect(onTileWithShipGen.next(shots).value).toEqual(
          select(getHits, shipId)
        );

        const hits = 0;
        expect(onTileWithShipGen.next(hits).value).toEqual(
          select(getTurns, shipId)
        );

        const turns = 0;
        expect(onTileWithShipGen.next(turns).value).toEqual(
          put(
            gameUpdate({
              ship,
              shots: shots + 1,
              hits: hits + 1,
              turns: turns - 1,
            })
          )
        );

        expect(onTileWithShipGen.next().done).toBeTrue();
      };

      const onTileEmpty = () => {
        expect(onTileEmptyGen.next(undefined).value).toEqual(
          select(getShots, shipId)
        );

        const shots = 0;
        expect(onTileEmptyGen.next(shots).value).toEqual(
          select(getHits, shipId)
        );

        const hits = 0;
        expect(onTileEmptyGen.next(hits).value).toEqual(
          select(getTurns, shipId)
        );

        const turns = 0;
        expect(onTileEmptyGen.next(turns).value).toEqual(
          put(
            gameUpdate({
              shots: shots + 1,
              turns: turns - 1,
            })
          )
        );

        expect(onTileEmptyGen.next().done).toBeTrue();
      };

      onTileWithShip();
      onTileEmpty();
    });
  });

  describe("* watchForGameEnd", () => {
    describe("when all ships are dead", () => {
      it("wins game", () => {
        const gen = watchForGameEnd();
        expect(gen.next().value).toEqual(select(getShips));

        const allDeadShips = [new Ship({ size: 1, hits: 1 })];
        expect(gen.next(allDeadShips).value).toEqual(
          put(gameEnd({ win: true }))
        );

        expect(gen.next().done).toBeTrue();
      });
    });

    describe("when all turns are taken", () => {
      it("loses game", () => {
        const gen = watchForGameEnd();
        expect(gen.next().value).toEqual(select(getShips));

        const shipsAlive = [new Ship({ size: 1, hits: 0 })];
        expect(gen.next(shipsAlive).value).toEqual(select(getTurns));

        const noMoreTurns = 0;
        expect(gen.next(noMoreTurns).value).toEqual(
          put(gameEnd({ win: false }))
        );

        expect(gen.next().done).toBeTrue();
      });
    });
    describe("else", () => {
      it("does nothing", () => {
        const gen = watchForGameEnd();
        expect(gen.next().value).toEqual(select(getShips));

        const shipsAlive = [new Ship({ size: 1, hits: 0 })];
        expect(gen.next(shipsAlive).value).toEqual(select(getTurns));

        const moreTurns = 1;
        expect(gen.next(moreTurns).done).toBeTrue();
      });
    });
  });
});
