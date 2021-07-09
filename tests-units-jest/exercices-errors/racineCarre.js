/**
 * @param {number} nb 
 * @returns {number}
 */
module.exports = function racineCarre(nb) {
  if (nb < 0) {
    throw new Error('nb must be positive');
  }

  return Math.sqrt(nb);
}
