/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];

  const result = [];
  const q = [[root, 0]];
  while (q.length) {
    const [n, l] = q.shift();
    console.log(n.val, l);
    // core code
    if (!result[l]) {
      result[l] = [n.val];
    } else {
      result[l].push(n.val);
    }

    if (n.left) q.push([n.left, l + 1]);
    if (n.right) q.push([n.right, l + 1]);
  }

  return result;
};
