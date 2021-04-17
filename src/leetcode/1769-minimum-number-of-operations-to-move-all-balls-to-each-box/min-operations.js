/**
 * 1769. Minimum Number of Operations to Move All Balls to Each Box
 * https://leetcode.com/problems/minimum-number-of-operations-to-move-all-balls-to-each-box/
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function (boxes) {
  const n = boxes.length;
  const result = Array.from({ length: n });

  for (let i = 0; i < n; i++) {
    result[i] = 0;
    for (let j = 0; j < n; j++) {
      if (i !== j && boxes[j] === '1') {
        result[i] += Math.abs(i - j);
      }
    }
  }

  return result;
};

export default minOperations;
