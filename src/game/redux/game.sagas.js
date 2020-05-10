import { takeLatest, put, takeEvery, select } from "redux-saga/effects";
import {
  GAME_SETUP,
  TILE_TOUCH,
  GAME_UPDATE,
  GAME_END,
} from "app/constants/action-types";
import Game from "game/models/game";
import {
  gameReady,
  gameUpdate,
  gameEnd,
  storeGameRecord,
} from "game/redux/game.actions";
import {
  getCell,
  getShip,
  getShots,
  getHits,
  getTurns,
  getShips,
} from "./game.reducer";
import GameRecord from "leaderboard/models/game-record";
import * as gameResult from "game/constants/game-result";
import {
  getGameMode,
  getSize,
  getNumPlayers,
} from "app/redux/game-info.reducer";

export function* onGameSetup() {
  const boardSize = yield select(getSize);
  const numPlayers = yield select(getNumPlayers);
  console.log("numPlayers: ", numPlayers);
  const games = Game.setup(boardSize, numPlayers);
  yield put(gameReady({ games }));
}

export function* onTileTouch({ payload: { row, col, player } }) {
  const shipId = yield select(getCell, row, col, player);
  const ship = yield select(getShip, shipId, player);

  let shots = yield select(getShots, player);
  let hits = yield select(getHits, player);
  let turns = yield select(getTurns, player);

  shots += 1;
  turns -= 1;

  if (ship) {
    ship.hit();
    hits += 1;

    yield put(gameUpdate({ ship, shots, hits, turns, player }));
    return;
  }

  yield put(gameUpdate({ shots, turns, player }));
}

export function* watchForGameEnd() {
  const numPlayers = yield select(getNumPlayers);

  for (let player = 1; player === numPlayers; player++) {
    const ships = yield select(getShips, player);
    const allDead = ships.every(ship => !ship.isAlive());

    if (allDead) {
      if (numPlayers === 1) {
        yield put(gameEnd({ result: gameResult.WIN }));
        return;
      }

      yield put(gameEnd({ result: gameResult[`WIN_P${player}`] }));
      return;
    }

    const turns = yield select(getTurns, player);
    if (turns === 0) {
      if (numPlayers === 1) {
        yield put(gameEnd({ result: gameResult.LOSE }));
        return;
      }

      if (player === 1) {
        yield put(gameEnd({ result: gameResult.WIN_P2 }));
        return;
      }

      yield put(gameEnd({ result: gameResult.WIN_P1 }));
      return;
    }
  }
}

export function* onGameEnd({ payload: { result } }) {
  const numPlayers = yield select(getNumPlayers);

  if (numPlayers > 1) {
    return;
  }

  const shots = yield select(getShots, 1);
  const { turns, name: mode } = yield select(getGameMode);
  const gameRecord = new GameRecord({ shots, turns, mode, result });
  yield put(storeGameRecord({ gameRecord }));
}

export default [
  takeLatest(GAME_SETUP, onGameSetup),
  takeEvery(TILE_TOUCH, onTileTouch),
  takeEvery(GAME_UPDATE, watchForGameEnd),
  takeEvery(GAME_END, onGameEnd),
];
