/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let set = new Set();
  let arr = Array.from(s);
  let maxLength = 0;
  let j = 0;
  for (let cur = 0; cur < arr.length; cur++) {
    if (!set.has(arr[cur])) {
      set.add(arr[cur]);
      // 添加完后立马更新maxlength
      maxLength = Math.max(maxLength, set.size);
    } else {
      // set中存在当前元素
      while (set.has(arr[cur])) {
        //只要set里有当前元素，让窗口往右边滑动,把重复的字符清理出去
        set.delete(arr[j]);
        j++;
      }
      // 此时set中的“cur_val”已经被删干净了，就需要再将其添加回去
      set.add(arr[cur]);
    }
  }
  return maxLength;
};
