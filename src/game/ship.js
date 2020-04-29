import aircraft from "game/ship-item/assets/aircraft.png";
import battleship from "game/ship-item/assets/battleship.png";
import submarine from "game/ship-item/assets/submarine.png";
import carriership from "game/ship-item/assets/carriership.png";
import { randomString } from "app/helpers/random";

export default class Ship {
  constructor({ id, size, hits, image }) {
    this.id = id || this.getId();
    this.size = size;
    this.hits = hits || 0;
    this.image = image || this.getImage();
  }

  getImage() {
    switch (this.size) {
      case 4:
        return aircraft;
      case 3:
        return battleship;
      case 2:
        return submarine;
      case 1:
        return carriership;
      default:
        console.error("Invalid ship size");
        return "";
    }
  }

  hit() {
    if (this.hits < this.size) {
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
