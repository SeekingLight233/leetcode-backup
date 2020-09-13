/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  const memo = [];
  memo[1] = 1;
  memo[2] = 2;
  // memo[3] = 3;

  for (let i = 3; i < n; i++) {
    memo[i] = memo[i - 1] + memo[i - 2];
  }
  return memo[i];
};
