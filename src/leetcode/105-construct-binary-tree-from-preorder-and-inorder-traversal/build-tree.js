import { TreeNode } from '../../ds';

/**
 * https://www.youtube.com/watch?v=PoBGyrIWisE
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  /**
   * splits left and right values
   * @param {number} root
   * @param {number[]} inorder
   * @returns {left: number[], right: number[]}
   */
  const findSubTrees = (root, inorder) => {
    const left = [];
    const right = [];

    let lefty = true;
    inorder.forEach((value) => {
      if (value === root) {
        lefty = false;
      } else {
        (lefty ? left : right).push(value);
      }
    });

    return { left, right };
  };

  if (inorder.length) {
    // pull the root
    const value = preorder.shift();
    const root = new TreeNode(value);
    // find the subtrees
    const { left, right } = findSubTrees(value, inorder);
    // recursively built the children
    root.left = buildTree(preorder, left);
    root.right = buildTree(preorder, right);

    return root;
  }

  return null;
};

export default buildTree;
