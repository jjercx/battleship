import { GAME_SETUP, GAME_READY, GAME_END } from "app/constants/action-types";

export const getGameMode = ({ gameInfo: { gameMode } }) => gameMode;
export const getGameReady = ({ gameInfo: { ready } }) => ready;
export const getGameResult = ({ gameInfo: { result } }) => result;

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
      return { ...state, gameMode, ready: false, result: null };
    }
    case GAME_READY: {
      return { ...state, ready: true };
    }
    case GAME_END: {
      const { result } = payload;
      return { ...state, result };
    }
    default:
      return state;
  }
};
