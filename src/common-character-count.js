const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let count = 0
  let baseOfIndex = {}
  for (let char of s1) {
    baseOfIndex[char] = []
  }
  for (let char of s1) {
    let pos = baseOfIndex[char][baseOfIndex[char].length - 1] + 1 || 0
    let currentIndex = s2.indexOf(char, pos)
    if (currentIndex !== -1 && !baseOfIndex[char].includes(currentIndex)) {
      count++
      baseOfIndex[char].push(currentIndex)
    }
  }
  return count
}

module.exports = {
  getCommonCharacterCount
};
