const fs = require('fs');
const readFileSyncUpper = require("./readFileSyncUpper");

test('readFileSyncUpper function' , () => {
    jest.spyOn(fs, 'readFileSync').mockReturnValue('abc');
    expect(readFileSyncUpper('sample.txt')).toBe('ABC');
    jest.spyOn(fs, 'readFileSync').mockRestore();
});