/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  if (strs.length === 0) return [];

  const map = new Map();
  for (let str of strs) {
    const characters = Array(26).fill(0); // 将里面填充26个0
    for (let i = 0; i < str.length; i++) {
      // 取出当前字母的ascii码
      const ascii = str.charCodeAt(i) - 97;
      characters[ascii]++; // 记录
    }
    // 把数组里的000100010转成字符串
    const key = characters.join("");

    //利用map实现分组操作
    if (!map.has(key)) {
      map.set(key, [str]);
    } else {
      const origin_strs = map.get(key);
      const new_strs = origin_strs.concat([str]);
      map.set(key, new_strs);
    }
  }

  const result = [];

  // 使用for of 遍历map 结果是数组
  for (let val of map) {
    result.push(val[1]);
  }
  return result;
};
