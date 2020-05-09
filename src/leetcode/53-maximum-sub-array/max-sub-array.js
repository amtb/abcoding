/**
 * Using Kadane's algorithm
 * https://en.wikipedia.org/wiki/Maximum_subarray_problem#Kadane's_algorithm
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let max;
  let currentMax;

  max = currentMax = nums[0];

  for (let i = 1; i < nums.length; i++) {
    // local max is either me or previous local max + me
    currentMax = Math.max(nums[i], currentMax + nums[i]);
    // best max overall
    max = Math.max(currentMax, max);
  }

  return max;
};

export default maxSubArray;
