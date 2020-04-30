import Ship from "./ship";

describe("ship class", () => {
  describe("constructor", () => {
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
});
