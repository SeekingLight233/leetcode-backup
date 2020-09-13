/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  const memo = []; //memo里面记录到当前位置的最大值
  memo[0] = nums[0]; //到第0个元素为止，最大值是第0个元素
  // 到第一个元素，面临选择
  for (let i = 1; i < nums.length; i++) {
    memo[i] = Math.max(nums[i], nums[i] + memo[i - 1]);
  }

  let max = nums[0];
  for (let val of memo) {
    if (val > max) max = val;
  }
  return max;
};

const test1 = maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
console.log(test1);
