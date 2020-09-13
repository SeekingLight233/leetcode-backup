/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  if (nums.length === 1) return nums[0];

  let left = 0,
    right = nums.length - 1;
  // 确认是否是反转数组
  if (nums[right] > nums[0]) {
    return nums[0];
  }

  while (left < right) {
    let mid = Math.floor(left + (right - left) / 2);
    if (nums[mid] > nums[mid + 1]) return nums[mid + 1];
    if (nums[mid] < nums[mid - 1]) return nums[mid];

    if (nums[mid] > nums[left]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
};
