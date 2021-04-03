/**
 * 1295. Find Numbers with Even Number of Digits
 * https://leetcode.com/problems/find-numbers-with-even-number-of-digits/
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
  let count = 0;

  for (const num of nums) {
    if (`${num}`.length % 2 === 0) {
      count += 1;
    }
  }

  return count;
};

export default findNumbers;
