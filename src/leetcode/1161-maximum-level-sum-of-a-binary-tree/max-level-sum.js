/**
 * https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/
 */
var maxLevelSum = function (root) {
  const sums = {};

  const walk = (node, level = 1) => {
    if (node) {
      sums[level] = (sums[level] || 0) + node.val;
      walk(node.left, 1 + level);
      walk(node.right, 1 + level);
    }
  };

  walk(root);

  let max = -Infinity;
  let level = -1;

  for (const [lvl, sum] of Object.entries(sums)) {
    if (max < sum) {
      max = sum;
      level = +lvl;
    }
  }

  return level;
};

export default maxLevelSum;
