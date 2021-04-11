/**
 * https://leetcode.com/problems/single-number-ii/
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const tripled = {};
  const singles = {};

  nums.forEach((num) => {
    if (!(num in tripled)) {
      if (num in singles) {
        tripled[num] = true;
        delete singles[num];
      } else {
        singles[num] = true;
      }
    }
  });

  return +Object.keys(singles)[0];
};

export default singleNumber;
