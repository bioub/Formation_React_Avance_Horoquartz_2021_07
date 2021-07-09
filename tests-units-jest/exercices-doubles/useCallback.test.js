const useCallback = require("./useCallback");

test('useCallback function', () => {
  const spy = jest.fn();
  useCallback(spy);

  expect(spy).toHaveBeenCalledTimes(1);
  expect(spy).toHaveBeenCalledWith(123);
});