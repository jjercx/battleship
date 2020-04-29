import { takeLatest, put } from "redux-saga/effects";
import { GAME_SETUP } from "app/constants/action-types";
import Game from "game/game";
import { gameReady } from "game/game.actions";

function* gameSetup({ payload: boardSize }) {
  const { ships, board } = Game.setup(boardSize);

  yield put(gameReady({ ships, board }));
}

export default [takeLatest(GAME_SETUP, gameSetup)];
