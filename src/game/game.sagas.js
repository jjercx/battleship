import { takeLatest, put, takeEvery, select } from "redux-saga/effects";
import { GAME_SETUP, TILE_TOUCH } from "app/constants/action-types";
import Game from "game/game";
import { gameReady, shipUpdate } from "game/game.actions";
import { getCell, getShip } from "./game.reducer";

function* gameSetup({ payload: boardSize }) {
  const { ships, board } = Game.setup(boardSize);

  yield put(gameReady({ ships, board }));
}

function* tileTouch({ payload: { row, col } }) {
  const shipId = yield select(getCell, row, col);
  const ship = yield select(getShip, shipId);
  if (ship) {
    ship.hit();
    yield put(shipUpdate({ ship }));
  }
}

export default [
  takeLatest(GAME_SETUP, gameSetup),
  takeEvery(TILE_TOUCH, tileTouch),
];
