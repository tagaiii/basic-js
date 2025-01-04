const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const compare = (a, b) => {
    if (a > b) {
      return 1;
    } else if (b > a) {
      return -1;
    }
    return 0;
  }
  const sortedValues = arr.filter((value) => value !== -1).sort(compare);
  const exceptionIndices = arr.reduce((acc, val, index) => {
    if (val === -1) {
      acc.push(index);
    }
    return acc;
  }, []);
  for (let i = 0; i < exceptionIndices.length; i += 1) {
    sortedValues.splice(exceptionIndices[i], 0, -1);
  }
  return sortedValues;
}

module.exports = {
  sortByHeight
};
