/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  /** @param {TreeNode} node */
  const inOrder = (node, values) => {
    if (!node) return;
    inOrder(node.left, values);
    values.push(node.val);
    inOrder(node.right, values);
  };

  const values = [];
  inOrder(root, values);
  return values[k - 1];
};
export default kthSmallest;
