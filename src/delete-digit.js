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
  let char = (n+'').split('')
  let result = []
  for (let i = 0; i < char.length; i++) {
    let newArr = [...char]
    newArr.splice(i, 1)
    result.push(+newArr.join(''))

  }
  return result.sort((a, b) => a - b)[result.length - 1]
}

module.exports = {
  deleteDigit
};
