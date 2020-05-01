import {
  GAME_SETUP,
  GAME_READY,
  GAME_UPDATE,
} from "app/constants/action-types";

export const getShips = ({ game: { ships } }) => Object.values(ships);

export const getShip = ({ game: { ships } }, shipId) => ships[shipId];

export const getLoading = ({ game: { loading } }) => loading;

export const getHits = ({ game: { hits } }) => hits;

export const getShots = ({ game: { shots } }) => shots;

export const getTurns = ({ game: { turns } }) => turns;

export const getCell = ({ game: { board } }, row, col) =>
  board && board[row][col];

const initialState = {
  loading: false,
  board: null,
  ships: {},
  hits: 0,
  shots: 0,
  turns: 0,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GAME_SETUP:
      return { ...state, loading: true };
    case GAME_READY: {
      const { ships, board } = payload;
      return { ...state, loading: false, board, ships };
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
