jest.mock('fs');
const readFileSyncUpper = require("./readFileSyncUpper");

test('readFileSyncUpper function' , () => {
    expect(readFileSyncUpper('sample.txt')).toBe('ABC');
});