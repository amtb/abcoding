import { TreeNode } from '../../ds';

/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function (t1, t2) {
  const merge = (tree1, tree2) => {
    if (tree1 || tree2) {
      if (tree1 && tree2) {
        const merged = new TreeNode(tree1.val + tree2.val);
        merged.left = merge(tree1.left, tree2.left);
        merged.right = merge(tree1.right, tree2.right);
        return merged;
      } else if (tree1) {
        return tree1;
      }

      return tree2;
    }
    return null;
  };

  return merge(t1, t2);
};

export default mergeTrees;
