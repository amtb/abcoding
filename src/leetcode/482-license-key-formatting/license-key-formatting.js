/**
 * https://leetcode.com/problems/license-key-formatting/
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function (s, k) {
  const all = [];
  let curr = [];
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== '-') {
      curr.push(s[i].toUpperCase());
    }

    // new group
    if (curr.length === k || (i === 0 && curr.length !== 0)) {
      const block = curr.reverse().join('');
      all.push(block);
      curr = [];
    }
  }

  return all.reverse().join('-');
};

export default licenseKeyFormatting;
