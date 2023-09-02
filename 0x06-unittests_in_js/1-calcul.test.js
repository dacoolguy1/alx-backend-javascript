const assert = require("assert");
const calculateNumber = require("../1-calcul.js");
const { describe } = require("mocha");

describe("calculateNumber", () => {
  it("should return the sum of a and b when type is SUM", () => {
    assert.equal(calculateNumber("SUM", 1.4, 4.5), 6);
  });

  it("should return the difference of a and b when type is SUBTRACT", () => {
    assert.equal(calculateNumber("SUBTRACT", 1.4, 4.5), -4);
  });

  it("should return the quotient of a and b when type is DIVIDE and b is not equal to 0", () => {
    assert.equal(calculateNumber("DIVIDE", 1.4, 4.5), 0.2);
  });

  it("should return the string Error when type is DIVIDE and b is equal to 0", () => {
    assert.equal(calculateNumber("DIVIDE", 1.4, 0), "Error");
  });
});