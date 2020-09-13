/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let l = 0;
  let r = 0;
  let res = '';
  // 初始化need
  const need = new Map();
  for (let val of t) {
    need.set(val, need.has(val) ? need.get(val) + 1 : 1);
  }
  //eg:  { 'A' => 1, 'B' => 1, 'C' => 1, 'D' => 1 }
  // 移动右指针
  let needLength = need.size;
  while (r < s.length) {
    const c = s[r];
    // 如果need中有当前字符
    if (need.has(c)) {
      // 就将need中的字符的个数-1
      need.set(c, need.get(c) - 1);
    }
    if (need.get(c) === 0) {
      // 如果减到0了，就更新needLength
      needLength--;
    }
    // 在满足条件的情况下减小子串(移动左指针)
    while (needLength === 0) {
      const newRes = s.substring(l, r + 1);
      if (newRes.length < res.length || res === '') res = newRes;
      const c2 = s[l];
      if (need.has(c2)) {
        // 如果要“即将丢出去”的左边字符刚好是在need列表中
        need.set(c2, need.get(c2) + 1);
      }
      if (need.get(c2) === 1) {
        needLength++;
      }
      l++;
    }

    r++;
  }

  return res;
};

let res = minWindow('ADOBECODEBANC', 'ABC');
console.log(res);
