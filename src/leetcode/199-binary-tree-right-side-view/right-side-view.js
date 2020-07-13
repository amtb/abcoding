/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
  const walk = (node, values, depth = 0) => {
    if (!node) return;

    values[depth] = node.val;
    walk(node.left, values, 1 + depth);
    walk(node.right, values, 1 + depth);
  };

  const values = [];
  walk(root, values);

  return values;
};

export default rightSideView;
