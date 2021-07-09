const hello = require("./hello");

test('hello function', () => {
  expect(hello('Toto')).toBe('Hello Toto');
});