import { GAME_SETUP } from "app/constants/action-types";

export const getGameMode = ({ gameInfo: { gameMode } }) => gameMode;

const initialState = {
  gameMode: null,
  result: null,
  ready: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GAME_SETUP: {
      const gameMode = payload;
      return { ...state, gameMode };
    }
    default:
      return state;
  }
};
