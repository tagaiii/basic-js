const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!(arr instanceof Array)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let result = [...arr];
  for (let i = 0; i < arr.length; i += 1) {
    if (result[i] === '--discard-next') {
      let amountToDiscard = ['--double-prev', '--discard-prev'].includes(result[i + 2]) ? 3 : 2;
      i !== result.length - 1 ? result.splice(i, amountToDiscard) : result.splice(i, 1);
      i -= 1;
    } else if (result[i] === '--discard-prev') {
      i > 0 ? result.splice(i - 1, 2) : result.splice(i, 1);
    } else if (result[i] === '--double-next') {
      i !== result.length - 1 ? result.splice(i, 1, result[i + 1]) : result.splice(i, 1);
    } else if (result[i] === '--double-prev') {
      i > 0 ? result.splice(i, 1, result[i - 1]) : result.splice(i, 1);
    }
  }
  return result;
}

module.exports = {
  transform
};
