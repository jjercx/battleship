import {
  GAME_READY,
  GAME_SETUP,
  TILE_TOUCH,
  GAME_UPDATE,
  GAME_END,
  STORE_GAME_RECORD,
} from "app/constants/action-types";

export const gameSetup = ({ gameMode }) => ({
  type: GAME_SETUP,
  payload: gameMode,
});

export const gameReady = ({ ships, board }) => ({
  type: GAME_READY,
  payload: {
    ships,
    board,
  },
});

export const tileTouch = ({ row, col }) => ({
  type: TILE_TOUCH,
  payload: {
    row,
    col,
  },
});

export const gameUpdate = ({ ship, shots, hits, turns }) => ({
  type: GAME_UPDATE,
  payload: { ship, shots, hits, turns },
});

export const gameEnd = ({ result }) => ({
  type: GAME_END,
  payload: { result },
});

export const storeGameRecord = ({ gameRecord }) => ({
  type: STORE_GAME_RECORD,
  payload: { gameRecord },
});
