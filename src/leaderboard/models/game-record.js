import { randomString } from "app/utils/random";

export default class GameRecord {
  constructor({ id, shots, turns, mode, result }) {
    this.id = id || randomString(5);
    this.shots = shots;
    this.turns = turns || Infinity;
    this.mode = mode;
    this.result = result;
  }
}
