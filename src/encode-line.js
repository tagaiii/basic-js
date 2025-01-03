const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';
  let currElement = str[0];
  let count = 1;
  for (let i = 1; i <= str.length; i += 1) {
    if (currElement === str[i]) {
      count += 1
    } else {
      result += count > 1 ? `${count}${currElement}` : currElement;
      count = 1;
      currElement = str[i];
    }
  }
  return result;
}

module.exports = {
  encodeLine
};
