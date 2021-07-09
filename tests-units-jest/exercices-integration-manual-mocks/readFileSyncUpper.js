const fs = require('fs');

module.exports = function readFileSyncUpper(filePath) {
    return fs.readFileSync(filePath, 'utf-8').toUpperCase();
};