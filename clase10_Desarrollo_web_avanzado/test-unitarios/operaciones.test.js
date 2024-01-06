const { sum, sub } = require("./operaciones");

describe.only("Voy sumando", () => {
  let i;
  beforeEach(() => {
    i = 0;
  });

  // Testeo la funcion sum
  test("adds 1 to i and it equals 1", () => {
    i = sum(i, 1);
    expect(i).toBe(1);
  });

  test.skip("i + (-1) da 0", () => {
    i = sum(i, -1);
    expect(i).toBe(-1);
  });
});

// Anatomia de un test:
test("nombre del test", () => {
  // Codigo del test
  // ...
  // Assertion
  expect(true).not.toBe(false);
  const expectedResult = {
    prop1: 1,
    prop2: 2,
  };
  const actualResult = {
    prop1: 1,
    prop2: 2,
  };
  expect(actualResult).toEqual(expectedResult);
});

// Testeo la funcion sub
test("1 - 1 da 0", () => {
  const resultado = sub(1, 1);
  expect(resultado).toBe(0);
});
