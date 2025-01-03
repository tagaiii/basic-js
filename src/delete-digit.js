const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let digits = String(n).split('');
  let maxNum = Math.floor(n / 10);
  for (let i = 0; i < digits.length - 1; i += 1) {
    let currNum = Number(digits.filter((_, index) => index !== i).join(''));
    if (currNum > maxNum) {
      maxNum = currNum;
    }
  }
  return maxNum;
}

module.exports = {
  deleteDigit
};
