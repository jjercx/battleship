import { GAME_SETUP, GAME_READY } from "app/constants/action-types";

export const getShips = ({ game: { ships } }) => Object.values(ships);

export const getLoading = ({ game: { loading } }) => loading;

const initialState = {
  loading: false,
  board: [],
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
