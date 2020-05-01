import { takeLatest, put, takeEvery, select } from "redux-saga/effects";
import { GAME_SETUP, TILE_TOUCH } from "app/constants/action-types";
import Game from "game/models/game";
import { gameReady, gameUpdate } from "game/redux/game.actions";
import { getCell, getShip, getShots, getHits, getTurns } from "./game.reducer";

function* gameSetup({ payload: boardSize }) {
  const { ships, board } = Game.setup(boardSize);
  yield put(gameReady({ ships, board }));
}

function* tileTouch({ payload: { row, col } }) {
  const shipId = yield select(getCell, row, col);
  const ship = yield select(getShip, shipId);

  let shots = yield select(getShots, shipId);
  let hits = yield select(getHits, shipId);
  let turns = yield select(getTurns, shipId);

  shots += 1;
  turns -= 1; // TODO: handle infinity and negatives

  if (ship) {
    ship.hit();
    hits += 1;

    yield put(gameUpdate({ ship, shots, hits, turns }));
    return;
  }

  yield put(gameUpdate({ shots, turns }));
}

export default [
  takeLatest(GAME_SETUP, gameSetup),
  takeEvery(TILE_TOUCH, tileTouch),
];
