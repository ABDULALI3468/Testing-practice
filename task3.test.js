const DMAS = require("./task3");
let c = console.log;

describe("DMAS functions", () => {
  describe("ADD METHOD of DMAS", () => {
    test("Add", () => {
      expect(DMAS.add(2, 4)).toBe(6);
      expect(DMAS.add(1, 4)).toBe(5);
      expect(DMAS.add(3, 4)).toBe(7);
    });
  });
  describe("multiply METHOD of DMAS", () => {
    test("multiply", () => {
      expect(DMAS.multiply(2, 4)).toBe(8);
      expect(DMAS.multiply(1, 4)).toBe(4);
      expect(DMAS.multiply(3, 4)).toBe(12);
    });
  });
  describe("substract METHOD of DMAS", () => {
    test("substract", () => {
      expect(DMAS.substract(2, 4)).toBe(-2);
      expect(DMAS.substract(1, 4)).toBe(-3);
      expect(DMAS.substract(3, 4)).toBe(-1);
    });
  });
  describe("divide METHOD of DMAS", () => {
    test("divide", () => {
      expect(DMAS.divide(4, 2)).toBe(2);
      expect(DMAS.divide(4, 4)).toBe(1);
      expect(DMAS.divide(4, 1)).toBe(4);
    });
  });
});
