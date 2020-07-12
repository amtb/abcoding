import { TreeNode } from '../../ds';

/**
 * @param {number} root
 * @param {number[]} numbers
 * @returns {left: number[], right: number[]}
 */
function split(root, numbers) {
  const left = [];
  const right = [];

  let toTheLeft = true;
  numbers.forEach((v) => {
    if (v === root) {
      toTheLeft = false;
    } else {
      (toTheLeft ? left : right).push(v);
    }
  });

  return { left, right };
}

/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  if (inorder.length) {
    const value = postorder.pop();
    const root = new TreeNode(value);

    const { left, right } = split(value, inorder);
    root.right = buildTree(right, postorder);
    root.left = buildTree(left, postorder);

    return root;
  }

  return null;
};

export default buildTree;
