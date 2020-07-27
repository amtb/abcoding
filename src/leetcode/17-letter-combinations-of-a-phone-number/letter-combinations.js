/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits) return [];

  const combinations = [];
  const digitLetters = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
  };

  /**
   * @param {string[]} curr
   */
  const generate = (curr, index) => {
    if (index === digits.length) {
      combinations.push(curr.join(''));
    } else {
      const digit = digits[index];
      const letters = digitLetters[digit];

      letters.forEach((letter) => {
        curr[index] = letter;
        generate(curr, index + 1);
      });
    }
  };

  const curr = digits.split('').map((digit) => digitLetters[digit][0]);
  generate(curr, 0);

  return combinations;
};

export default letterCombinations;
