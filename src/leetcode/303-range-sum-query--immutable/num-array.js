/**
 * 303. Range Sum Query - Immutable
 * https://leetcode.com/problems/range-sum-query-immutable/
 */
class NumArray {
  /**
   * @param {number[]} nums
   */
  constructor(nums) {
    this.sumUpTo = [...nums];

    for (let i = 1; i < nums.length; i++) {
      this.sumUpTo[i] += this.sumUpTo[i - 1];
    }
  }

  sumRange(i, j) {
    let previous = 0;
    if (i > 0) previous = this.sumUpTo[i - 1];
    return this.sumUpTo[j] - previous;
  }
}

export default NumArray;
