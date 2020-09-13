/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  if (intervals.length < 2) {
    return intervals;
  }
  // 根据起始位置将区间排序
  intervals.sort((a, b) => {
    return a[0] - b[0];
  });
  // 用curr来存储能够合并的最大区间
  let curr = intervals[0]; // 初始化为第一个元素
  let result = [];

  for (let interval of intervals) {
    // 如果curr的终止位置大于interval的起始位置，就可以合并
    if (curr[1] >= interval[0]) {
      curr[1] = Math.max(curr[1], interval[1]); // interval[1]有可能比curr[1]小，直接赋值上去是不对的
    } else {
      result.push(curr);
      curr = interval; // 更新待合并的区间
    }
  }
  // 在上面的条件判断中，最后一个元素有可能走的是第一个判定条件
  if (curr.length !== 0) {
    result.push(curr);
  }
  return result;
};
