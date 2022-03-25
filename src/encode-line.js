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
function encodeLine(str ) {
  let result = []
  let prevLetter = ' '
  
  for (let i = 0; i < str.length; i++) {
    
    let currentLetter = str[i]
    if (prevLetter === currentLetter) {
      result[result.length - 1][0]++
      continue
    }
    
    result.push([1, currentLetter])
    prevLetter = currentLetter
  }
  return result.map(item => item.filter( el => el !== 1).join('')).join('')
}

module.exports = {
  encodeLine
};
