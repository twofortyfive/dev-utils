import invariant from ".";

describe("Test of invariant()", () => {
  test("Condition is verified", () => {
    expect(() => invariant("0 < 1", () => 0 < 1)).not.toThrowError();
  });

  test("Condition is NOT verified", () => {
    expect(() => invariant("0 < 1", () => 1 < 0)).toThrowError("Invariant violation: '0 < 1' is not verified.");
  });
});
