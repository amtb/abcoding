/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function (root) {
  /** @param {TreeNode} node */
  const walk = (node, data, depth = 0) => {
    if (!node) return;

    const value = node.val;
    data[depth] = data[depth] || { sum: 0, count: 0 };

    data[depth].sum += value;
    data[depth].count += 1;

    walk(node.left, data, 1 + depth);
    walk(node.right, data, 1 + depth);
  };

  const data = {};
  walk(root, data);

  return Object.values(data).map(({ sum, count }) => sum / count);
};

export default averageOfLevels;
