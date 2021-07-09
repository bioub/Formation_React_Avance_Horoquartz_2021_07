/**
 * @param {number[]} nbs 
 * @returns {number}
 */
module.exports = function totalPairs(nbs) {
  return nbs.filter((nb) => nb % 2 === 0).length;
}
