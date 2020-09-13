/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  if (m === 1 && n === 1) {
    return 1;
  }
  if (m === 1 && n === 2) {
    return 1;
  }
  if (m === 2 && n === 1) {
    return 1;
  }
  if (m === 2 && n === 2) {
    return 2;
  }
  // 初始化二位数组
  const memo = [];
  for (let i = 0; i < n; i++) {
    memo.push([]);
  }
  //把第一行和第一列初始化为0
  for (let x = 0; x < n; x++) {
    memo[x][0] = 1;
  }
  for (let y = 0; y < m; y++) {
    memo[0][y] = 1;
  }

  //填数
  for (let x = 1; x < n; x++) {
    for (let y = 1; y < m; y++) {
      memo[x][y] = memo[x - 1][y] + memo[x][y - 1];
    }
  }
  return memo[memo.length - 1][memo[0].length - 1];
};

const test1 = uniquePaths(3, 2);
const test2 = uniquePaths(7, 3);
console.log(test1);
console.log(test2);
