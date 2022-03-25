const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(mac) {
  let arr = mac.split('-').join('').split('')
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    
    if (Number.isInteger(+item)) {
      if (item < 0 || item > 9) return false
    } else if (typeof item === 'string') {
      console.log(item, item.charCodeAt())
      if (item.charCodeAt() < 65 || item.charCodeAt() > 70) {
        console.log('eok')
        return false
      }
    }
  }
  return true
}
module.exports = {
  isMAC48Address
};
