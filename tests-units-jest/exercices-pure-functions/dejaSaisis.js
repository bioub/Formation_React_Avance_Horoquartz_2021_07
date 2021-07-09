/**
 * @param {number[]} nbs
 * @returns {string}
 */
module.exports = function dejaSaisis(nbs) {
  if (!nbs.length) {
    return;
  }

  return 'Vous avez déjà saisi : ' + nbs.join(' | ');
}
