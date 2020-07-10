/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  const walk = (node, levels, depth = 0) => {
    if (!node) return;
    levels[depth] = levels[depth] || [];
    levels[depth].push(node.val);

    walk(node.left, levels, 1 + depth);
    walk(node.right, levels, 1 + depth);
  };

  const levels = [];
  walk(root, levels);

  return levels.reverse();
};

export default levelOrderBottom;
