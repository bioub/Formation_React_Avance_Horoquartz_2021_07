/**
 * @param {number} min 
 * @param {number} max 
 * @returns {number}
 */
module.exports = function genererAlea(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
