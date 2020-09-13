/**
 * @param {number[]} tree
 * @return {number}
 */
var totalFruit = function (tree) {
  const map = new Map(); //用map来作为滑动窗口，模拟两个篮子
  let max = 1;
  let j = 0;
  for (let i = 0; i < tree.length; i++) {
    map.set(tree[i], i); //存储当前水果的种类，和最后出现的位置
    if (map.size > 2) {
      // 如果添加后超过了两个篮子，就删除掉前一个篮子
      // 找出前一个篮子对应的位置
      let targetIndex = tree.length - 1;
      for (let [type, index] of map) {
        if (index < targetIndex) {
          targetIndex = index;
        }
      }
      map.delete(tree[targetIndex]);
      j = targetIndex + 1;
    }

    max = Math.max(max, i - j + 1);
  }
  return max;
};
