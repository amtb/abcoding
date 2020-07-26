/**
 * @param {string} string
 * @return {string[]}
 */
var letterCasePermutation = function (string) {
  const all = [];

  /**
   * @param {string} char
   */
  const isAlpha = (char) => {
    const c = char.toLowerCase();
    return c >= 'a' && c <= 'z';
  };

  /**
   * @param {string[]} curr
   * @param {number} index
   */
  const generate = (curr, index) => {
    if (index === string.length) {
      all.push(curr.join(''));
    } else {
      const char = curr[index];
      if (isAlpha(char)) {
        curr[index] = char.toLowerCase();
      }

      generate(curr, index + 1);

      if (isAlpha(char)) {
        curr[index] = char.toUpperCase();
        generate(curr, index + 1);
      }
    }
  };

  const curr = string.split('');
  generate(curr, 0);

  return all;
};

export default letterCasePermutation;
