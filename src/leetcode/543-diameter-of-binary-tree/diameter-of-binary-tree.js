/**
 * 543. Diameter of Binary Tree
 * https://leetcode.com/problems/diameter-of-binary-tree/
 *
 * For each node, compute the:
 * - longest path from this node to the deepest leave
 * - diameter of the node (longest path left + longest path right + self)
 * And compare the diameter to the current max diameter
 *
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  let max = -1;
  const walk = (node) => {
    let longest = 0;
    let diameter = 0;
    if (node) {
      const left = walk(node.left);
      const right = walk(node.right);

      longest = 1 + Math.max(left.longest, right.longest);
      diameter = 1 + left.longest + right.longest;
    }
    max = Math.max(max, diameter);
    return { longest, diameter };
  };

  walk(root);
  return max - 1;
};

export default diameterOfBinaryTree;
