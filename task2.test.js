const reverseString = require("./task2");
test("we are going to test the if this function returns the reverse string", () => {
  expect(reverseString("ABC")).toBe("CBA");
});
