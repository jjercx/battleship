import { GAME_SETUP, GAME_READY } from "app/constants/action-types";

export const getGameMode = ({ gameInfo: { gameMode } }) => gameMode;
export const getGameReady = ({ gameInfo: { ready } }) => ready;

const initialState = {
  gameMode: null,
  result: null,
  ready: false,
  numPlayers: 1,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GAME_SETUP: {
      const gameMode = payload;
      return { ...state, gameMode, ready: false };
    }
    case GAME_READY: {
      return { ...state, ready: true };
    }
    default:
      return state;
  }
};
