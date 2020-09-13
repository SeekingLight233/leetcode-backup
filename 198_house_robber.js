/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length === 0) {
    return 0;
  }

  if (nums.length === 1) {
    return nums[0];
  }

  const memo = []; // 用来记录所有的可能性
  memo[0] = nums[0]; // 如果只有一间房子，那么能偷到的最大的金钱数就是本身
  memo[1] = Math.max(nums[0], nums[1]); // 如果有两间房子，小偷不傻，他肯定要从钱最多的房子里选一个
  // 接下来的问题时，从第三个房子开始，能够取到的最大值是什么？
  for (let i = 2; i < nums.length; i++) {
    memo[i] = Math.max(nums[i] + memo[i - 2], memo[i - 1]);
  }
  return memo[nums.length - 1];
};
