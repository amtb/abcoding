/**
 * a binary tree node.
 */
export class TreeNode {
  /**
   * @param {*} val
   * @param {TreeNode} left
   * @param {TreeNode} right
   */
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
