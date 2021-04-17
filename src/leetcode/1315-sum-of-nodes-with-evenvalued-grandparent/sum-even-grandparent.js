/**
 * 1315. Sum of Nodes with Even-Valued Grandparent
 * https://leetcode.com/problems/sum-of-nodes-with-even-valued-grandparent/
 * @param {TreeNode} root
 * @return {number}
 */
var sumEvenGrandparent = function (root) {
  let sum = 0;

  const walk = (node, isParentEven = false, isGrandParentEven = false) => {
    if (node) {
      if (isGrandParentEven) {
        sum += node.val;
      }
      const isEven = node.val % 2 === 0;
      walk(node.left, isEven, isParentEven);
      walk(node.right, isEven, isParentEven);
    }
  };

  walk(root);

  return sum;
};

export default sumEvenGrandparent;
