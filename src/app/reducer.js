import { combineReducers } from "redux";
import board from "game/board.reducer";
import ships from "game/ships.reducer";

export default combineReducers({
  ui: combineReducers({
    board,
    ships,
  }),
});
