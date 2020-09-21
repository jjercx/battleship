import { combineReducers } from "redux";
import game from "game/redux/game.reducer";
import gameRecords from "leaderboard/redux/game-records.reducer";
import gameInfo from "./game-info.reducer";

export default combineReducers({
  game,
  gameRecords,
  gameInfo,
});
