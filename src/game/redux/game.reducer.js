import {
  GAME_SETUP,
  GAME_READY,
  GAME_UPDATE,
} from "app/constants/action-types";
import Ship from "game/models/ship";

export const getShips = ({ game: { ships } }) =>
  Object.values(ships).map(ship => new Ship(ship));

export const getShip = ({ game: { ships } }, shipId) => ships[shipId];

export const getHits = ({ game: { hits } }) => hits;

export const getShots = ({ game: { shots } }) => shots;

export const getTurns = ({ game: { turns } }) => turns;

export const getCell = ({ game: { board } }, row, col) =>
  board && board[row][col];

export const initialState = {
  board: null,
  ships: {},
  hits: 0,
  shots: 0,
  turns: 0,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GAME_SETUP: {
      const {
        gameMode: { turns },
      } = payload;
      return { ...state, turns, shots: 0, hits: 0 };
    }
    case GAME_READY: {
      const { games } = payload;
      const { ships, board } = games[0];
      // TODO: this should work with 2 players too
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
    default:
      return state;
  }
};
