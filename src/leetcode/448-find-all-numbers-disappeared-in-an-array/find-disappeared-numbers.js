/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  const result = Array.from({ length: nums.length + 1 }, (_, index) => index);
  // crossed out numbers found
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    result[num] = undefined;
  }

  // return untouched (skip 0)
  return result.filter((e) => e);
};

export default findDisappearedNumbers;
