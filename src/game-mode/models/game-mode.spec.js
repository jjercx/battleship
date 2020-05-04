import GameMode from "./game-mode";

describe("GameMode", () => {
  describe("constructor", () => {
    it("sets turns and name", () => {
      const name = "test";
      const turns = 12;

      const gameMode = new GameMode({ name, turns });
      expect(gameMode.name).toBe(name);
      expect(gameMode.turns).toBe(turns);
    });
  });

  describe("easy mode", () => {
    let gameMode;
    beforeAll(() => {
      gameMode = GameMode.easy();
    });
    it("sets infinite turns", () => {
      expect(gameMode.turns).toBe(Infinity);
    });

    it("sets easy name", () => {
      expect(gameMode.name).toBe("easy");
    });

    it("sets easy ship", () => {
      expect(gameMode.ship).not.toBeUndefined();
      expect(gameMode.ship.size).toBe(1);
    });
  });

  describe("medium mode", () => {
    let gameMode;
    beforeAll(() => {
      gameMode = GameMode.medium();
    });
    it("sets 100 turns", () => {
      expect(gameMode.turns).toBe(100);
    });

    it("sets medium name", () => {
      expect(gameMode.name).toBe("medium");
    });

    it("sets medium ship", () => {
      expect(gameMode.ship).not.toBeUndefined();
      expect(gameMode.ship.size).toBe(3);
    });
  });

  describe("hard mode", () => {
    let gameMode;
    beforeAll(() => {
      gameMode = GameMode.hard();
    });
    it("sets 50 turns", () => {
      expect(gameMode.turns).toBe(50);
    });

    it("sets hard name", () => {
      expect(gameMode.name).toBe("hard");
    });

    it("sets hard ship", () => {
      expect(gameMode.ship).not.toBeUndefined();
      expect(gameMode.ship.size).toBe(4);
    });
  });

  describe("custom mode", () => {
    let gameMode;
    beforeAll(() => {
      gameMode = GameMode.custom();
    });
    it("does not set turns", () => {
      expect(gameMode.turns).toBeUndefined();
    });

    it("sets custom name", () => {
      expect(gameMode.name).toBe("custom");
    });

    it("sets custom ship", () => {
      expect(gameMode.ship).not.toBeUndefined();
      expect(gameMode.ship.size).toBe(2);
    });
  });
});
