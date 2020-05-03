import * as actions from "./game.actions";
import * as types from "app/constants/action-types";
import { EMPTY } from "app/constants/game";
import Ship from "game/models/ship";
import GameMode from "game-mode/models/game-mode";

describe("game actions", () => {
  it("requests setup for a game", () => {
    const gameMode = GameMode.easy();
    const expectedAction = {
      type: types.GAME_SETUP,
      payload: gameMode,
    };
    expect(actions.gameSetup({ gameMode })).toEqual(expectedAction);
  });

  it("notifies game setup is finished and it's ready to play", () => {
    const ships = [];
    const board = [[EMPTY]];
    const expectedAction = {
      type: types.GAME_READY,
      payload: {
        ships,
        board,
      },
    };
    expect(actions.gameReady({ ships, board })).toEqual(expectedAction);
  });

  it("notifies user interacted with tile from the board", () => {
    const row = 0;
    const col = 0;
    const expectedAction = {
      type: types.TILE_TOUCH,
      payload: {
        row,
        col,
      },
    };
    expect(actions.tileTouch({ row, col })).toEqual(expectedAction);
  });

  it("notifies game needs to update GUI", () => {
    const ship = new Ship({ size: 2 });
    const shots = 0;
    const hits = 0;
    const turns = 0;
    const expectedAction = {
      type: types.GAME_UPDATE,
      payload: { ship, shots, hits, turns },
    };
    expect(actions.gameUpdate({ ship, shots, hits, turns })).toEqual(
      expectedAction
    );
  });
});
