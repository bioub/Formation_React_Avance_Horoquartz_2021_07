/**
 * @param {string} key 
 * @returns {string}
 */
module.exports = function localStorageToUpper(key) {
  return localStorage.getItem(key).toUpperCase();
}
