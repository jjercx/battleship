import {
  GAME_SETUP,
  GAME_READY,
  GAME_END,
  SET_SIZE,
  SET_NUM_PLAYERS,
} from "app/constants/action-types";

export const getGameMode = ({ gameInfo: { gameMode } }) => gameMode;
export const getGameReady = ({ gameInfo: { ready } }) => ready;
export const getGameResult = ({ gameInfo: { result } }) => result;
export const getSize = ({ gameInfo: { size } }) => size;
export const getNumPlayers = ({ gameInfo: { numPlayers } }) => numPlayers;

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
    case SET_NUM_PLAYERS: {
      const { numPlayers } = payload;
      return { ...state, numPlayers };
    }
    case GAME_SETUP: {
      const { gameMode } = payload;
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
