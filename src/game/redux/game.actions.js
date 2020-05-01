import {
  GAME_READY,
  GAME_SETUP,
  TILE_TOUCH,
  GAME_UPDATE,
} from "app/constants/action-types";

export const gameSetup = ({ size }) => ({
  type: GAME_SETUP,
  payload: size,
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