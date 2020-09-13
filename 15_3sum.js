/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const res = [];
  nums.sort((a, b) => {
    return a - b;
  });
  for (let i = 0; i < nums.length - 2; i++) {
    if (i === 0 || nums[i - 1] !== nums[i]) {
      let start = i + 1;
      let end = nums.length - 1;
      while (start < end) {
        if (nums[i] + nums[start] + nums[end] === 0) {
          res.push([nums[i], nums[start], nums[end]]);
          start++;
          end--;
          // 挪完之后只要相等，就继续往后再跳一下
          // 注意：这个过程是重复的条件判断，如果用if的话就只会往后跳一次
          while (start < end && nums[start] === nums[start - 1]) {
            start++;
          }
          while (start < end && nums[end] === nums[end + 1]) {
            end--;
          }
        } else if (nums[i] + nums[start] + nums[end] < 0) {
          start++;
        } else {
          end--;
        }
      }
    }
  }
  return res;
};
