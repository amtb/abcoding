/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let total = 0;
  let max = nums.length;

  for (let i = 0; i < nums.length; i++) {
    max = Math.max(max, nums[i]);
    total += nums[i];
  }

  const expected = (max * (max + 1)) / 2;
  return expected - total;
};

export default missingNumber;
