import { all } from "redux-saga/effects";
import gameSagas from "game/game.sagas";

export default function* rootSaga() {
  yield all([...gameSagas]);
}
