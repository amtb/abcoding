/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const acc = [];

  const walk = (node, depth) => {
    if (node) {
      if (acc[depth]) {
        acc[depth].push(node.val);
      } else {
        acc[depth] = [node.val];
      }

      walk(node.left, 1 + depth);
      walk(node.right, 1 + depth);
    }
  };

  walk(root, 0);
  return acc;
};

export default levelOrder;
