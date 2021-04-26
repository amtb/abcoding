/**
 * 392. Is Subsequence
 * https://leetcode.com/problems/is-subsequence/
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let index = -1;
  for (let i = 0; i < s.length; i++) {
    index = t.indexOf(s[i], index + 1);

    // not found or the remaining string is shorter
    if (index === -1 || t.length - index < s.length - i) return false;
  }

  return true;
};

export default isSubsequence;
