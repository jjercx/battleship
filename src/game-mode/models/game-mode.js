import Ship from "game/models/ship";

export default class GameMode {
  constructor({ turns, name, ship, turnLabel }) {
    this.name = name;
    this.turns = turns;
    this.turnLabel = turnLabel;
    this.ship = ship;
  }

  static easy() {
    const ship = new Ship({ size: 1 });
    return new GameMode({
      turns: Infinity,
      turnLabel: "Infinite",
      name: "easy",
      ship,
    });
  }

  static medium() {
    const ship = new Ship({ size: 3 });
    return new GameMode({ turns: 100, name: "medium", ship });
  }

  static hard() {
    const ship = new Ship({ size: 4 });
    return new GameMode({ turns: 50, name: "hard", ship });
  }

  static custom() {
    const ship = new Ship({ size: 2 });
    return new GameMode({
      turns: undefined,
      turnLabel: "X",
      name: "custom",
      ship,
    });
  }

  setTurns(turns) {
    this.turns = turns;
    return this;
  }
}
