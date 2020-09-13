/**
 * @param {string} s
 * @return {boolean}
 * @description 遇到左括号就把右括号压入栈，遇见右括号就出栈，并与当前元素对比
 */
var isValid = function (s) {
  let mappings = new Map();
  mappings.set("{", "}");
  mappings.set("(", ")");
  mappings.set("[", "]");
  let stack = new Array();
  for (let val of s) {
    // 如果能得到对应的值，就说明遇到了左括号，此时把对应的右括号给放进去
    let rightParen = mappings.get(val);
    if (rightParen) {
      stack.push(rightParen);
    } else {
      //得不到说明是右括号，此时出栈，与当前元素对比，判断是否相等
      rightParen = stack.pop();
      if (rightParen !== val) {
        return false;
      }
    }
  }
  if (stack.length > 0) {
    return false;
  } else {
    return true;
  }
};
