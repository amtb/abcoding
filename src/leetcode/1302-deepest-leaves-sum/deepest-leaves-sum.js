/**
 * @param {TreeNode} root
 * @return {number}
 */
var deepestLeavesSum = function (root) {
  const sums = {};
  let currentMaxDepth = -1;
  const walk = (node, depth = 0) => {
    if (node) {
      currentMaxDepth = Math.max(currentMaxDepth, depth);
      // check if we have a leaf at least at the same level of the previous leaf or deeper
      if (
        depth === currentMaxDepth &&
        node.left === null &&
        node.right === null
      ) {
        sums[depth] = sums[depth] || 0;
        sums[depth] += node.val;
      } else {
        walk(node.left, depth + 1);
        walk(node.right, depth + 1);
      }
    }
  };

  walk(root);
  return sums[currentMaxDepth];
};

export default deepestLeavesSum;
