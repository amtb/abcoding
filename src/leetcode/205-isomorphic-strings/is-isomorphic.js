/**
 * 205. Isomorphic Strings
 * https://leetcode.com/problems/isomorphic-strings/
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  const map = {};
  const mapped = new Set();

  for (let i = 0; i < s.length; i++) {
    const si = s[i];
    const ti = t[i];
    const img = map[si];

    if (img === undefined) {
      // not mapped
      if (mapped.has(ti)) {
        // check if target wasn't mapped already
        return false;
      }
      map[si] = ti;
      mapped.add(ti);
    } else if (img !== ti) {
      // mapped valued is the same as the target ?
      return false;
    }
  }

  return true;
};

export default isIsomorphic;
