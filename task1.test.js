const stringLength = require("./task1");

test("it should return the string length", () =>
  expect(stringLength("ABDULALI")).toBe(8));

test("it should not be greater that 10", () => {
  expect(() => stringLength("string is empty or too long")).toThrow(
    "string is empty or too long"
  );
});

test("It can't be less than 1", () => {
  expect(() => stringLength("")).toThrow("string is empty or too long");
});
