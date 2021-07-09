/**
 * @param {number} nb1 
 * @param {number} nb2 
 * @returns {string}
 */
module.exports = function comparer(nb1, nb2) {
  if (nb1 < nb2) {
    return 'Trop petit';
  } else if (nb1 > nb2) {
    return 'Trop grand';
  } else {
    return 'Gagné';
  }
}
