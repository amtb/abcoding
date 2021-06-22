/**
 * 686. Repeated String Match
 * https://leetcode.com/problems/repeated-string-match/
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var repeatedStringMatch = function (a, b) {
  let numberOfTimes = 0;
  let repeated = '';
  do {
    numberOfTimes += 1;
    repeated = a.repeat(numberOfTimes);
  } while (!repeated.includes(b) && repeated.length < b.length + a.length);

  return repeated.includes(b) ? numberOfTimes : -1;
};

export default repeatedStringMatch;
