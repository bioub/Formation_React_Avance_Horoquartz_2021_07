const genererAlea = require("./genererAlea");

test("genererAlea function with fake", () => {
  const backupRandom = Math.random;
  Math.random = () => 0.5;
  expect(genererAlea(0, 10)).toBe(5);
  Math.random = backupRandom;
});

test("genererAlea function with spy", () => {
  // jest.spyOn(Math, 'random').mockImplementation(() => 0.5);
  jest.spyOn(Math, "random").mockReturnValue(0.5);
  expect(genererAlea(0, 10)).toBe(5);

  expect(Math.random).toHaveBeenCalledTimes(1);
  jest.spyOn(Math, "random").mockRestore();
});
