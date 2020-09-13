/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  if (matrix.length === 0) {
    return [];
  }
  // 定义边界
  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;

  let direction = "right";
  let result = [];

  while (left <= right && top <= bottom) {
    if (direction === "right") {
      for (let i = left; i <= right; i++) {
        const val = matrix[top][i];
        result.push(val);
      }
      direction = "down";
      top++;
    } else if (direction === "down") {
      for (let i = top; i <= bottom; i++) {
        const val = matrix[i][right];
        result.push(val);
      }
      direction = "left";
      right--;
    } else if (direction === "left") {
      for (let i = right; i >= left; i--) {
        const val = matrix[bottom][i];
        result.push(val);
      }
      direction = "up";
      bottom--;
    } else if (direction === "up") {
      for (let i = bottom; i >= top; i--) {
        const val = matrix[i][left];
        result.push(val);
      }
      direction = "right";
      left++;
    }
  }
  return result;
};
spiralOrder([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
