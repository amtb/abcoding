/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  const getMaxDepth = (node) => {
    if (node) {
      return 1 + Math.max(getMaxDepth(node.left), getMaxDepth(node.right));
    }

    return 0;
  };

  return getMaxDepth(root);
};

export default maxDepth;
