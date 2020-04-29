import {
  GAME_READY,
  GAME_SETUP,
  TILE_TOUCH,
  SHIP_UPDATE,
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

export const shipUpdate = ({ ship }) => ({
  type: SHIP_UPDATE,
  payload: ship,
});