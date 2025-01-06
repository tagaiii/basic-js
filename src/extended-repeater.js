const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const repeatTimes = 'repeatTimes' in options ? options.repeatTimes : 1;
  const separator = 'separator' in options ? options.separator : '+';
  const addition = 'addition' in options ? options.addition : '';
  const additionRepeatTimes = 'additionRepeatTimes' in options ? options.additionRepeatTimes : 1;
  const additionSeparator = 'additionSeparator' in options ? options.additionSeparator : '|';

  let result = '';
  for (let i = 0; i < repeatTimes; i += 1) {
    let stringWithAddition = str;
    for (let j = 0; j < additionRepeatTimes; j += 1) {
      if (j + 1 !== additionRepeatTimes) {
        stringWithAddition += `${addition}${additionSeparator}`;
      } else {
        stringWithAddition += addition;
      }
    }
    if (i + 1 !== repeatTimes) {
      result += `${stringWithAddition}${separator}`;
    } else {
      result += stringWithAddition;
    }
  }

  return result;
}

module.exports = {
  repeater
};
