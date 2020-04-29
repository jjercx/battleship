import { GAME_SETUP, GAME_READY } from "app/constants/action-types";

export const getShips = ({ game: { ships } }) => Object.values(ships);

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
    default:
      return state;
  }
};
