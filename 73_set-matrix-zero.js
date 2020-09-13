/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  // 检查第一行和第一列是否含有0
  let firstColHasZero = false;
  let firstRowHasZero = false;
  for (let i = 0; i < matrix.length; i++) {
    // 每一行的第一个元素 也就是第一列
    if (matrix[i][0] === 0) {
      firstColHasZero = true;
    }
  }
  for (let i = 0; i < matrix[0].length; i++) {
    if (matrix[0][i] === 0) {
      firstRowHasZero = true;
    }
  }

  // 使用第一行与第一列，来标记其余的行列是否含有0(让含有0的元素先浮出来)
  for (let row = 1; row < matrix.length; row++) {
    for (let col = 1; col < matrix[0].length; col++) {
      if (matrix[row][col] === 0) {
        matrix[row][0] = 0;
        matrix[0][col] = 0;
      }
    }
  }

  // 利用第一行与第一列的记录，将剩余元素标0
  for (let row = 1; row < matrix.length; row++) {
    for (let col = 1; col < matrix[0].length; col++) {
      if (matrix[row][0] === 0 || matrix[0][col] === 0) {
        matrix[row][col] = 0;
      }
    }
  }
  // 最后处理第一行与第一列的情况
  if (firstColHasZero) {
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][0] = 0;
    }
  }
  if (firstRowHasZero) {
    for (let i = 0; i < matrix[0].length; i++) {
      matrix[0][i] = 0;
    }
  }
  return matrix;
};
