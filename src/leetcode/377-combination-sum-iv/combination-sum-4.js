/**
 * 377. Combination Sum IV
 * https://leetcode.com/problems/combination-sum-iv/
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function (nums, target) {
  const memo = {};
  const count = (t) => {
    if (t in memo) return memo[t];
    if (t === 0) return 1;
    if (t < 0) return 0;

    let ways = 0;
    for (const num of nums) {
      const remainder = t - num;
      ways += count(remainder);
    }

    memo[t] = ways;
    return ways;
  };

  return count(target);
};

export default combinationSum4;
