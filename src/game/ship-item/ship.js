import aircraft from "./assets/aircraft.png";
import battleship from "./assets/battleship.png";
import submarine from "./assets/submarine.png";
import carriership from "./assets/carriership.png";

export default class Ship {
  constructor(size) {
    this.id = this.getId();
    this.size = size;
    this.hits = 0;
    this.image = this.getImage();
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

  getId() {
    // 5-character random string
    return Math.random().toString(36).substring(7);
  }
}
