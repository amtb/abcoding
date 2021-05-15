/**
 * 140. Word Break II
 * https://leetcode.com/problems/word-break-ii/
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function (s, wordDict) {
  const all = [];
  const findCombinations = (target = s, previous = []) => {
    if (target === '') {
      all.push(previous.join(' '));
      return;
    }

    for (const word of wordDict) {
      if (target.startsWith(word)) {
        const suffix = target.slice(word.length);
        findCombinations(suffix, [...previous, word]);
      }
    }
  };

  findCombinations();
  return all;
};

export default wordBreak;
