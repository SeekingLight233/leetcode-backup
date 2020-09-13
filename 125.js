/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  //忽略非字母和数字的情况
  s = s.toLowerCase().replace(/[^0-9a-zA-Z]/g, "");
  let i = 0;
  let j = s.length - 1;
  while (i < j) {
    if (s[i] === s[j]) {
      i++;
      j--;
    } else {
      return false;
    }
  }
  return true;
};
