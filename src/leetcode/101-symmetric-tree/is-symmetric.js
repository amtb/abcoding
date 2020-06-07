/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (!root) {
    return true;
  }

  const walk = (left, right) => {
    if (left && right) {
      const eq = left.val === right.val;
      return eq && walk(left.left, right.right) && walk(left.right, right.left);
    }
    return left === right;
  };

  return walk(root.left, root.right);
};

export default isSymmetric;
