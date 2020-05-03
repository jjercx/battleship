import { takeLatest, put, takeEvery, select } from "redux-saga/effects";
import {
  GAME_SETUP,
  TILE_TOUCH,
  GAME_UPDATE,
} from "app/constants/action-types";
import Game from "game/models/game";
import { gameReady, gameUpdate, gameEnd } from "game/redux/game.actions";
import {
  getCell,
  getShip,
  getShots,
  getHits,
  getTurns,
  getSize,
  getShips,
} from "./game.reducer";

export function* onGameSetup() {
  const boardSize = yield select(getSize);
  const { ships, board } = Game.setup(boardSize);
  yield put(gameReady({ ships, board }));
}

export function* onTileTouch({ payload: { row, col } }) {
  const shipId = yield select(getCell, row, col);
  const ship = yield select(getShip, shipId);

  let shots = yield select(getShots, shipId);
  let hits = yield select(getHits, shipId);
  let turns = yield select(getTurns, shipId);

  shots += 1;
  turns -= 1;

  if (ship) {
    ship.hit();
    hits += 1;

    yield put(gameUpdate({ ship, shots, hits, turns }));
    return;
  }

  yield put(gameUpdate({ shots, turns }));
}

export function* watchForGameEnd() {
  const ships = yield select(getShips);
  const allDead = ships.every(ship => !ship.isAlive());

  if (allDead) {
    yield put(gameEnd({ win: true }));
    return;
  }

  const turns = yield select(getTurns);
  if (turns === 0) {
    yield put(gameEnd({ win: false }));
    return;
  }
}

export default [
  takeLatest(GAME_SETUP, onGameSetup),
  takeEvery(TILE_TOUCH, onTileTouch),
  takeEvery(GAME_UPDATE, watchForGameEnd),
];
