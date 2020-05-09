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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  function invert (node) {
    if (!node) {
      return node;
    }

    let { left, right } = node;
    const tmp = left;
    left = right;
    right = tmp;

    invert(node.left);
    invert(node.right);

    return node;
  }

  return invert(root);
};

export default invertTree;
