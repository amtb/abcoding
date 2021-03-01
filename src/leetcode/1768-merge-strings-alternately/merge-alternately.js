/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  const word1Length = word1.length;
  const word2Length = word2.length;
  const result = [];

  for (let i = 0, j = 0, k = 0; k < word1Length + word2Length; k++) {
    if (i >= word1Length) {
      result[k] = word2[j++];
    } else if (j >= word2Length) {
      result[k] = word1[i++];
    } else {
      result[k] = k % 2 === 0 ? word1[i++] : word2[j++];
    }
  }

  return result.join('');
};
export default mergeAlternately;
