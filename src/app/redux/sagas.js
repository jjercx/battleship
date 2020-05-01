import { all } from "redux-saga/effects";
import gameSagas from "game/redux/game.sagas";

export default function* rootSaga() {
  yield all([...gameSagas]);
}
