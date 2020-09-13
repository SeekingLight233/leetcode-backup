/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
  if (!root) return false;

  let result = false;

  const dfs = (node, _sum) => {
    if (_sum === sum && !node.left && !node.right) result = true;
    if (node.left) dfs(node.left, node.left.val + _sum);
    if (node.right) dfs(node.right, node.right.val + _sum);
  };
  dfs(root, root.val);

  return result;
};
