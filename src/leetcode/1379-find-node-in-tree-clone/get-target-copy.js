/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function (original, cloned, target) {
  function find(node, cloneNode) {
    if (!node) {
      return;
    }

    if (node === target) {
      return cloneNode;
    }

    if (node.left) {
      const targetInClone = find(node.left, cloneNode.left);
      if (targetInClone) {
        return targetInClone;
      }
    }

    if (node.right) {
      return find(node.right, cloneNode.right);
    }
  }

  return find(original, cloned);
};

export default getTargetCopy;
