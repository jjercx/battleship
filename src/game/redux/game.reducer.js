import {
  GAME_SETUP,
  GAME_READY,
  GAME_UPDATE,
  GAME_END,
  SET_SIZE,
} from "app/constants/action-types";
import Ship from "game/models/ship";
import * as gameResult from "../constants/game-result";

export const getShips = ({ game: { ships } }) =>
  Object.values(ships).map(ship => new Ship(ship));

export const getShip = ({ game: { ships } }, shipId) => ships[shipId];

export const getHits = ({ game: { hits } }) => hits;

export const getShots = ({ game: { shots } }) => shots;

export const getTurns = ({ game: { turns } }) => turns;

export const getSize = ({ game: { size } }) => size;

export const getGameResult = ({ game: { result } }) => result;

export const getCell = ({ game: { board } }, row, col) =>
  board && board[row][col];

export const initialState = {
  board: null,
  ships: {},
  hits: 0,
  shots: 0,
  turns: 0,
  size: 10,
  result: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_SIZE: {
      const { size } = payload;
      return { ...state, size };
    }
    case GAME_SETUP: {
      const gameMode = payload;
      const { turns } = gameMode;
      return { ...state, turns, shots: 0, hits: 0 };
    }
    case GAME_READY: {
      const { ships, board } = payload;
      return {
        ...state,
        board,
        ships,
      };
    }
    case GAME_UPDATE: {
      const { ship, shots, hits, turns } = payload;

      const newShips = ship
        ? { ...state.ships, [ship.id]: ship }
        : { ...state.ships };

      const newHits = hits ?? state.hits;

      return {
        ...state,
        ships: newShips,
        shots,
        hits: newHits,
        turns,
      };
    }
    case GAME_END: {
      const { win } = payload;
      const result = win ? gameResult.WIN : gameResult.LOSE;
      return { ...state, result };
    }
    default:
      return state;
  }
};
