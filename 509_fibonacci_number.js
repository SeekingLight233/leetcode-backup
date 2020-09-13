/**
 * @param {number} N
 * @return {number}
 */
var fib = function (N) {
  if (N === 0) return 0;
  if (N === 1) return 1;

  const memoArr = [];
  memoArr[0] = 0;
  memoArr[1] = 1;

  function resolve(num) {
    if (memoArr[num] != null) {
      return memoArr[num];
    } else {
      // 如果没有这个值，就老老实实递归计算
      memoArr[num] = resolve(num - 1) + resolve(num - 2);
      return memoArr[num];
    }
  }

  return resolve(N);
};

const res = fib(3);
console.log(res);
