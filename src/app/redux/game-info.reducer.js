import {
  GAME_SETUP,
  GAME_READY,
  GAME_END,
  SET_SIZE,
} from "app/constants/action-types";

export const getGameMode = ({ gameInfo: { gameMode } }) => gameMode;
export const getGameReady = ({ gameInfo: { ready } }) => ready;
export const getGameResult = ({ gameInfo: { result } }) => result;
export const getSize = ({ gameInfo: { size } }) => size;

const initialState = {
  gameMode: null,
  result: null,
  ready: false,
  numPlayers: 1,
  size: 10,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_SIZE: {
      const { size } = payload;
      return { ...state, size };
    }
    case GAME_SETUP: {
      const { gameMode, numPlayers } = payload;
      return { ...state, gameMode, numPlayers, ready: false, result: null };
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
