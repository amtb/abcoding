/**
 * @param {string} input
 * @return {number}
 */
var lengthLongestPath = function (input) {
  const length = input.length;

  const countNextTabs = (fromIndex) => {
    let count = 0;
    for (let i = fromIndex + 1; i < length && input[i] === '\t'; i++) {
      count += 1;
    }

    return count;
  };

  let max = 0;
  let i = 0;
  let curr = '';
  let level = 0;
  const chunks = [];

  while (i < length) {
    const char = input[i];

    if (char !== '\n' && char !== '\t') {
      curr += input[i];
    }

    if (i === length - 1 || char === '\n') {
      chunks[level] = curr;

      if (curr.includes('.')) {
        chunks.length = level + 1;
        const path = chunks.join('/');
        max = Math.max(max, path.length);
      }

      curr = '';
      level = countNextTabs(i);
      i += level;
    }

    i++;
  }

  return max;
};

export default lengthLongestPath;
