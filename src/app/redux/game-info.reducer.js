import {
  GAME_SETUP,
  GAME_END,
  SET_SIZE,
  SET_NUM_PLAYERS,
  GAME_UPDATE,
} from "app/constants/action-types";

export const getGameMode = ({ gameInfo: { gameMode } }) => gameMode;
export const getGameResult = ({ gameInfo: { result } }) => result;
export const getSize = ({ gameInfo: { size } }) => size;
export const getNumPlayers = ({ gameInfo: { numPlayers } }) => numPlayers;
export const getCurrentPlayer = ({ gameInfo: { currentPlayer } }) =>
  currentPlayer;

const initialState = {
  gameMode: null,
  result: null,
  numPlayers: 1,
  size: 10,
  currentPlayer: 1,
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
      return { ...state, gameMode, result: null };
    }
    case GAME_UPDATE: {
      const { currentPlayer } = payload;
      return { ...state, currentPlayer };
    }
    case GAME_END: {
      const { result } = payload;
      return { ...state, result };
    }
    default:
      return state;
  }
};
