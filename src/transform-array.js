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
  if (!(arr instanceof Array)) throw Error("'arr' parameter must be an instance of the Array!")
  let copy = [...arr]
  function recurse() {
    for (let i = 0; i < copy.length; i++) {
      switch (copy[i]) {
        case '--discard-next':
          if (copy[i + 1]) {
            copy.splice(i, 2, 'error')
            recurse()
          } else {
            copy.splice(i, 1)
          }
          continue
        case '--discard-prev':
          if (copy[i - 1]) {
            copy.splice(i-1, 2, 'error')
            recurse()
          } else {
            copy.splice(i, 1)
          }
          continue
        case '--double-next':
          if (copy[i + 1]) {
            copy.splice(i, 1, copy[i+1])
            recurse()
          } else {
            copy.splice(i, 1)
          }
          continue
        case '--double-prev':
          if (copy[i - 1]) {
            copy.splice(i, 1, copy[i -1])
            recurse()
          } else {
            copy.splice(i, 1)
          }
          continue
        default:
          continue
      }
    }
    return copy
  }
  
  return recurse().filter( item => item !== 'error')
}

module.exports = {
  transform
};
