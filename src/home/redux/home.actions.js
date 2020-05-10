import { SET_NUM_PLAYERS } from "app/constants/action-types";

export const setNumPlayers = ({ numPlayers }) => ({
  type: SET_NUM_PLAYERS,
  payload: { numPlayers },
});
