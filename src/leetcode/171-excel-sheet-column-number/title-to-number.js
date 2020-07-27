/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function (s) {
  const map = {};

  for (let i = 1; i <= 26; i++) {
    const char = String.fromCharCode(64 + i);
    map[char] = i;
  }

  const max = s.length - 1;
  let total = 0;
  for (let i = max; i >= 0; i--) {
    const value = map[s[i]];
    const factor = max - i;

    total += value * 26 ** factor;
  }

  return total;
};

export default titleToNumber;
