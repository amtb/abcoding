/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const indexes = {};
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (indexes[char] === undefined) {
      indexes[char] = i;
    } else {
      indexes[char] = Infinity;
    }
  }

  const first = Math.min(...Object.values(indexes));
  return first === Infinity ? -1 : first;
};

export default firstUniqChar;
