import {
  GAME_SETUP,
  GAME_READY,
  SHIP_UPDATE,
} from "app/constants/action-types";

export const getShips = ({ game: { ships } }) => Object.values(ships);

export const getShip = ({ game: { ships } }, shipId) => ships[shipId];

export const getLoading = ({ game: { loading } }) => loading;

export const getCell = ({ game: { board } }, row, col) =>
  board && board[row][col];

const initialState = {
  loading: false,
  board: null,
  ships: {},
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GAME_SETUP:
      return { ...state, loading: true };
    case GAME_READY: {
      const { ships, board } = payload;
      return { ...state, loading: false, board, ships };
    }
    case SHIP_UPDATE: {
      const ship = payload;
      return { ...state, ships: { ...state.ships, ...{ [ship.id]: ship } } };
    }
    default:
      return state;
  }
};
