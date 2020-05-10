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
  payload: { gameMode },
});

export const gameReady = ({ games }) => ({
  type: GAME_READY,
  payload: {
    games,
  },
});

export const tileTouch = ({ row, col, player }) => ({
  type: TILE_TOUCH,
  payload: {
    row,
    col,
    player,
  },
});

export const gameUpdate = ({
  ship,
  shots,
  hits,
  turns,
  player,
  currentPlayer,
}) => ({
  type: GAME_UPDATE,
  payload: { ship, shots, hits, turns, player, currentPlayer },
});

export const gameEnd = ({ result }) => ({
  type: GAME_END,
  payload: { result },
});

export const storeGameRecord = ({ gameRecord }) => ({
  type: STORE_GAME_RECORD,
  payload: { gameRecord },
});
