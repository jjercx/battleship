import Ship from "./ship";

describe("ship class", () => {
  let validShip;
  beforeEach(() => {
    validShip = new Ship({ size: 2 });
  });

  describe("constructor", () => {
    describe("with params", () => {
      it("works", () => {
        const ship = new Ship({
          id: "abcde",
          size: 2,
          hits: 1,
          type: "battleship",
        });

        expect(ship.id).toBe("abcde");
        expect(ship.size).toBe(2);
        expect(ship.hits).toBe(1);
        expect(ship.type).toBe("battleship");
      });
    });

    describe("without params", () => {
      it("throws", () => {
        expect(() => new Ship()).toThrow(Error);
      });
    });

    describe("with just size", () => {
      it("works from [1,4]", () => {
        expect(new Ship({ size: 1 })).toBeInstanceOf(Ship);
        expect(new Ship({ size: 2 })).toBeInstanceOf(Ship);
        expect(new Ship({ size: 3 })).toBeInstanceOf(Ship);
        expect(new Ship({ size: 4 })).toBeInstanceOf(Ship);
      });

      it("throws outside [1,4]", () => {
        expect(() => new Ship({ size: 0 })).toThrow(Error);
        expect(() => new Ship({ size: 5 })).toThrow(Error);
      });
    });
  });

  describe("getType", () => {
    it("works with valid size", () => {
      expect(new Ship({ size: 4 }).getType()).toBe("aircraft");
      expect(new Ship({ size: 3 }).getType()).toBe("battleship");
      expect(new Ship({ size: 2 }).getType()).toBe("submarine");
      expect(new Ship({ size: 1 }).getType()).toBe("carriership");
    });

    it("throws with invalid size", () => {
      const consoleError = jest
        .spyOn(console, "error")
        .mockImplementation(() => {});

      validShip.size = 0;
      expect(validShip.getType()).toBe("");
      expect(consoleError).toBeCalled();

      consoleError.mockRestore();
    });
  });

  describe("hit", () => {
    it("increments hit points", () => {
      const { hits } = validShip;
      validShip.hit();
      expect(validShip.hits).toBe(hits + 1);
    });

    it("does nothing if ship dead", () => {
      const ship = new Ship({ size: 2, hits: 2 });
      const { hits } = ship;
      ship.hit();
      expect(ship.hits).toBe(hits);
    });
  });

  describe("isAlive", () => {
    it("returns boolean", () => {
      expect(validShip.isAlive()).toBeBoolean();
    });
  });

  describe("getId", () => {
    it("returns 5-char string", () => {
      const id = validShip.getId();
      expect(id).toBeString();
      expect(id.length).toBe(5);
    });
  });
});
