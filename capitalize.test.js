const capitalize = require("./capitalize");

test("Capitalize first character", () => {
  expect(capitalize("hello")).toBe("Hello");
});
