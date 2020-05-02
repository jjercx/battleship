import { randomNumber, randomShuffle, randomString } from "./random";

describe("random helper", () => {
  describe("randomNumber", () => {
    it("returns a number", () => {
      expect(randomNumber(1)).toBeNumber();
    });

    it("returns between 0 (inclusive) and num (exclusive)", () => {
      const num = 5;
      for (let i = 0; i < 10; i++) {
        expect(randomNumber(num)).toBeGreaterThanOrEqual(0);
        expect(randomNumber(num)).toBeLessThan(num);
      }
    });
  });

  describe("randomShuffle", () => {
    it("returns an array", () => {
      expect(randomShuffle([])).toBeArray();
    });

    it("returns an array with same elements", () => {
      const array = [1, 2, 3];
      const shuffle = randomShuffle(array);
      expect(shuffle).toIncludeSameMembers(array);
      expect(shuffle.length).toBe(array.length);
    });
  });

  describe("randomString", () => {
    it("returns an string", () => {
      expect(randomString(5)).toBeString();
    });

    it("returns an string of size", () => {
      const size = 5;
      expect(randomString(size).length).toBe(size);
    });
  });
});
