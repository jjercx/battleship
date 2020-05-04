import { combineReducers } from "redux";
import game from "game/redux/game.reducer";
import games from "leaderboard/redux/games.reducer";

export default combineReducers({
  game,
  games,
});
