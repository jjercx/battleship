import {
  GAME_SETUP,
  GAME_READY,
  GAME_UPDATE,
  GAME_END,
} from "app/constants/action-types";
import Ship from "game/models/ship";
import * as gameStatus from "../constants/game-status";

export const getShips = ({ game: { ships } }) =>
  Object.values(ships).map(ship => new Ship(ship));

export const getShip = ({ game: { ships } }, shipId) => ships[shipId];

export const getLoading = ({ game: { loading } }) => loading;

export const getHits = ({ game: { hits } }) => hits;

export const getShots = ({ game: { shots } }) => shots;

export const getTurns = ({ game: { turns } }) => turns;

export const getSize = ({ game: { size } }) => size;

export const getGameStatus = ({ game: { status } }) => status;

export const getCell = ({ game: { board } }, row, col) =>
  board && board[row][col];

export const initialState = {
  loading: false,
  board: null,
  ships: {},
  hits: 0,
  shots: 0,
  turns: 0,
  size: 2,
  // size: 10,
  status: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GAME_SETUP: {
      const gameMode = payload;
      const { turns } = gameMode;
      return { ...state, loading: true, gameMode, turns };
    }
    case GAME_READY: {
      const { ships, board } = payload;
      return {
        ...state,
        loading: false,
        board,
        ships,
        status: gameStatus.IN_PROGRESS,
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
      const status = win ? gameStatus.WON : gameStatus.LOST;
      return { ...state, status };
    }
    default:
      return state;
  }
};
