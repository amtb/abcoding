/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const length = nums.length;

  if (length === 0) {
    return 0;
  }

  // track the highest score at each index
  const scoreIncluding = [nums[0]];
  // track the highest score excluding current index
  const scoreExcluding = [0];

  for (let i = 1; i < length; i++) {
    const lastHighest = scoreIncluding[i - 1];
    // check if it's worth it
    scoreIncluding[i] = Math.max(nums[i] + scoreExcluding[i - 1], lastHighest);
    scoreExcluding[i] = lastHighest;
  }

  return scoreIncluding[length - 1];
};

export default rob;
