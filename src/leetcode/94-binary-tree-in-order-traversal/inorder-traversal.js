/**
 * trivial
 * @param {TreeNode} root
 * @return {number[]}
 */
export function inorderTraversalRecursion(root) {
  const acc = [];

  const walk = (node) => {
    if (node) {
      walk(node.left);
      acc.push(node.val);
      walk(node.right);
    }
  };

  walk(root);
  return acc;
}

/**
 * no recursion
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const acc = [];
  const stack = [];

  let curr = root;
  while (curr || stack.length) {
    while (curr) {
      stack.unshift(curr);
      curr = curr.left;
    }

    curr = stack.shift();
    acc.push(curr.val);
    curr = curr.right;
  }

  return acc;
};

export default inorderTraversal;
