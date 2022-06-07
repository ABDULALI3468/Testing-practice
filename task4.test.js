const capitalize = require("./task4");

test("check if parameter is string", () => {
  expect(() => capitalize()).toThrow("parameter is not a string");
});

test("check if the string is capitalized", () => {
  expect(capitalize("str")).toBe("Str");
});
