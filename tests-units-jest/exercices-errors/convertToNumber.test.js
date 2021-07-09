const convertToNumber = require("./convertToNumber");

describe("convertToNumber function", () => {
//   beforeAll(() => {});
//   beforeEach(() => {});
//   afterAll(() => {});
//   afterEach(() => {});

  test("that params is converted", () => {
    expect(convertToNumber("123")).toBe(123);
  });

  test("that an error is thrown", () => {
    expect(() => convertToNumber("abc")).toThrowError('Erreur : "abc" n\'est pas un nombre')
  });
});
