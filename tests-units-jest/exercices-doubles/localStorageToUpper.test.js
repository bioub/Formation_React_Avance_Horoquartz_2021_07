const localStorageToUpper = require("./localStorageToUpper");

test('localStorageToUpper function', () => {
  globalThis.localStorage = {
    getItem(key) {
      return 'abc';
    }
  };

  expect(localStorageToUpper('random-key')).toBe('ABC');
});