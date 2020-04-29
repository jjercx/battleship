import { GAME_READY, GAME_SETUP } from "app/constants/action-types";

export const gameSetup = ({ size }) => ({
  type: GAME_SETUP,
  payload: size,
});

export const gameReady = ({ ships, board }) => ({
  type: GAME_READY,
  payload: { ships, board },
});
