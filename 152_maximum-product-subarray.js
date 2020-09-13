/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  // 存储最大的乘积结果
  const maxProductMemo = [];
  // 存储最小的乘积结果
  const minProductMemo = [];

  // 如果这个数据只有一个元素，那么最大值和最小值都会是这个元素本身
  maxProductMemo[0] = nums[0];
  minProductMemo[0] = nums[0];
  // 先默认第一个元素为最大值
  let max = nums[0];
  // 动态规划，遍历剩下的情况(如果有两个元素...如果有三个元素...如果有四个元素...)
  for (let i = 1; i < nums.length; i++) {
    // 可以想象成有两个元素

    // 如果有两个元素，那么最大乘积 = 第二个元素 or 第二个元素*前一种情况最大值 or 第二个元素*前一种情况最最小值
    // 因为要考虑到负数的情况
    maxProductMemo[i] = Math.max(
      nums[i],
      nums[i] * maxProductMemo[i - 1],
      nums[i] * minProductMemo[i - 1]
    );
    minProductMemo[i] = Math.min(
      nums[i],
      nums[i] * maxProductMemo[i - 1],
      nums[i] * minProductMemo[i - 1]
    );

    //顺手记录下max变量
    max = Math.max(max, maxProductMemo[i]);
  }
  return max;
};
