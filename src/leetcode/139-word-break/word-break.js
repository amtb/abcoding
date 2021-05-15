/**
 * 139. Word Break
 * https://leetcode.com/problems/word-break/
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const dict = wordDict.reduce((acc, word) => {
    acc[word] = true;
    return acc;
  }, {});

  const matrix = {};

  /**
   * builds unique key for the string starting at start and finishing at end
   */
  const getKey = (start, end) => {
    return `${start}-${end}`;
  };

  /**
   * @param {number} length
   * @return {{start: number, end: string}[]}
   */
  const getWordsIndexes = (length) => {
    const indexes = [];
    for (let start = 0; start <= s.length - length; start++) {
      const end = start + length;
      indexes.push({ start, end });
    }

    return indexes;
  };

  /**
   * checks if a word or a split of the word are in the dictionnary
   * @param {string} word
   */
  const checkInDictionnary = (start, end) => {
    let found = false;

    const key = getKey(start, end);
    const word = s.substring(start, end);
    if (dict[word]) {
      found = true;
    } else {
      for (let i = start; i < end; i++) {
        const before = getKey(start, i);
        const after = getKey(i, end);

        if (matrix[before] && matrix[after]) {
          found = true;
          break;
        }
      }
    }

    matrix[key] = found;
  };

  for (let len = 1; len <= s.length; len++) {
    const indexes = getWordsIndexes(len);
    indexes.forEach(({ start, end }) => checkInDictionnary(start, end));
  }

  return matrix[getKey(0, s.length)];
};

/**
 * uses strings as indexes
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
export function anotherWordBreak(s, wordDict) {
  const dict = wordDict.reduce((acc, word) => {
    acc[word] = true;
    return acc;
  }, {});

  const matrix = {};

  /**
   * @param {number} length
   * @return {string[]}
   */
  const getWordsOfLength = (length) => {
    const words = [];
    for (let start = 0; start <= s.length - length; start++) {
      const word = s.substr(start, length);
      words.push(word);
    }

    return words;
  };

  /**
   * checks if a word or a split of the word are in the dictionnary
   * @param {string} word
   */
  const checkInDictionnary = (word) => {
    let found = false;
    if (dict[word]) {
      found = true;
    } else {
      const wordLength = word.length;
      for (let i = 1; i <= wordLength; i++) {
        const before = word.substr(0, i);
        const after = word.substr(i, wordLength - i);

        if (matrix[before] && matrix[after]) {
          found = true;
          break;
        }
      }
    }

    matrix[word] = found;
  };

  for (let len = 1; len <= s.length; len++) {
    const words = getWordsOfLength(len);
    words.forEach((word) => checkInDictionnary(word));
  }

  return matrix[s];
}

export function bestWordBreak(s, wordDict) {
  const memo = {};
  const findCombinations = (target = s) => {
    if (target in memo) return memo[target];
    if (target === '') return true;

    for (const word of wordDict) {
      if (target.startsWith(word)) {
        const suffix = target.slice(word.length);
        const suffixFound = findCombinations(suffix);
        if (suffixFound) return (memo[target] = true);
      }
    }

    return (memo[target] = false);
  };

  return findCombinations();
}

export default wordBreak;
