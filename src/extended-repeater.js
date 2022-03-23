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
  let {repeatTimes = 1, separator = '+', addition, additionRepeatTimes, additionSeparator = '|'} = options
  let result = []
  if (str === undefined) return ''
  for (let i = 0; i < repeatTimes; i++) {
    let resultAddition = str + repeater(addition, {repeatTimes: additionRepeatTimes, separator: additionSeparator}) 
    result.push(resultAddition)
  }
  
  return result.join(separator)

}

module.exports = {
  repeater
};
