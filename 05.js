/**
 * @param {string} s
 * @return {string}
 */

var longestPalindrome = function (s) {
  if (s.length < 2) return s;
  let start = 0;
  let maxLength = 1;
  const judge = (left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      const interval = right + 1 - left;
      if (interval > maxLength) {
        maxLength = interval;
        start = left;
      }
      left--;
      right++;
    }
  };
  for (let i = 0; i < s.length; i++) {
    judge(i - 1, i + 1);
    judge(i, i + 1);
  }
  return s.substr(start, maxLength);
};

let res = longestPalindrome("ccc");
console.log(res);
