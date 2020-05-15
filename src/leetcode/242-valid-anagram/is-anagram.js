/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  /**
   * gets the chararcters of a string
   * @param {string} s
   * @return {Map<string, number[]>}
   */
  const getChars = (s) => {
    const acc = {};
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      if (acc[char]) {
        acc[char].push(i);
      } else {
        acc[char] = [i];
      }
    }

    return acc;
  };

  const sChars = getChars(s);
  const tChars = getChars(t);

  for (const char in sChars) {
    const tIndexes = tChars[char];
    if (!tIndexes || tIndexes.length !== sChars[char].length) {
      return false;
    }
    delete tChars[char];
  }

  return Object.keys(tChars).length === 0;
};

export default isAnagram;
