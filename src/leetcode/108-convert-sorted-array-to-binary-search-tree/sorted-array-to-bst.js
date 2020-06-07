import { TreeNode } from '../../ds';

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  const getSubTree = (low, high) => {
    if (low > high) return null;

    const mid = Math.floor((high + low) / 2);
    const node = new TreeNode(nums[mid]);

    node.left = getSubTree(low, mid - 1);
    node.right = getSubTree(mid + 1, high);

    return node;
  };

  return getSubTree(0, nums.length - 1);
};
export default sortedArrayToBST;
