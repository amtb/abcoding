/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  const acc = [];

  const walk = (node, depth) => {
    if (node) {
      if (acc[depth]) {
        if (depth % 2 === 0) {
          acc[depth].push(node.val);
        } else {
          // reverse order on odd levels
          acc[depth].unshift(node.val);
        }
      } else {
        acc[depth] = [node.val];
      }

      // deepa
      walk(node.left, 1 + depth);
      walk(node.right, 1 + depth);
    }
  };

  walk(root, 0);
  return acc;
};

export default zigzagLevelOrder;
