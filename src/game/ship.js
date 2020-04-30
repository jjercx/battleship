import { randomString } from "app/helpers/random";

export default class Ship {
  constructor({ id, size, hits, type } = {}) {
    if (!size) {
      throw Error("ship size is required");
    }

    if (size < 1 || size > 4) {
      throw Error("ship size invalid");
    }

    this.id = id || this.getId();
    this.size = size;
    this.hits = hits || 0;
    this.type = type || this.getType();
  }

  getType() {
    switch (this.size) {
      case 4:
        return "aircraft";
      case 3:
        return "battleship";
      case 2:
        return "submarine";
      case 1:
        return "carriership";
      default:
        console.error("Invalid ship size");
        return "";
    }
  }

  hit() {
    if (this.isAlive()) {
      this.hits += 1;
    }
  }

  isAlive() {
    return this.hits < this.size;
  }

  getId() {
    return randomString(5);
  }
}
