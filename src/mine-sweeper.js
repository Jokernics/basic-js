const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
      //[1, 1] - [0, 0 || 0, 1 || 0 ,2] || 
                  // 1, 0 ||       1 , 2
                  // 2, 0  2, 1    2, 2
                  // i-1=> j-1, j, j+1,    i, i+ 1, 
function minesweeper(matrix) {
  let result = matrix.map( (arr, i) => {
    return arr.map( (item, j) => {
      let count = 0
      for (let t = -1; t !== 2; t++) {
        for (let h = -1; h !== 2; h++) {
          if (i + t === i && j + h === j) continue 
          if (matrix[i + t] && matrix[i + t][j + h] && matrix[i + t][j + h] === true) {
            
            count++
          }
        }
      }
      return count
      
    })
  })
  return result
}

module.exports = {
  minesweeper
};
