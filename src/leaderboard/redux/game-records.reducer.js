import { STORE_GAME_RECORD } from "app/constants/action-types";
import GameRecord from "leaderboard/models/game-record";
import * as gameStatus from "game/constants/game-status";

export const getGameRecords = ({ gameRecords }) =>
  Object.values(gameRecords)
    .map(gameRecord => new GameRecord(gameRecord))
    .sort((a, b) => {
      if (a.result === gameStatus.WIN && b.result !== gameStatus.WIN) {
        return -1;
      }

      if (b.result === gameStatus.WIN && a.result !== gameStatus.WIN) {
        return 1;
      }

      if (a.turns < b.turns) {
        return -1;
      }

      if (a.turns > b.turns) {
        return 1;
      }

      if (a.shots < b.shots) {
        return -1;
      }

      if (a.shots > b.shots) {
        return 1;
      }

      return 0;
    });

export default (state = {}, { type, payload }) => {
  switch (type) {
    case STORE_GAME_RECORD: {
      const { gameRecord } = payload;
      return { ...state, ...{ [gameRecord.id]: gameRecord } };
    }
    default:
      return state;
  }
};
