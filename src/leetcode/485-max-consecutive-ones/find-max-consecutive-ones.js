/**
 * 485. Max Consecutive Ones
 * https://leetcode.com/problems/max-consecutive-ones/
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let curr = 0;
  let max = -1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      curr += 1;
    }

    if (nums[i] === 0 || i === nums.length - 1) {
      max = Math.max(max, curr);
      curr = 0;
    }
  }

  return max;
};

export default findMaxConsecutiveOnes;
