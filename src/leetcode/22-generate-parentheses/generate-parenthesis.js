/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const results = [];
  const length = 2 * n;

  const isBalanced = (array) => {
    const stack = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i] === '(') {
        stack.push(array[i]);
      } else {
        const latest = stack.pop();
        if (latest !== '(') return false;
      }
    }

    return stack.length === 0;
  };

  const getAlternatives = (index) => {
    if (index === 0) return ['('];
    if (index === length - 1) return [')'];

    return ['(', ')'];
  };

  const generate = (curr = [], index = 0) => {
    if (index === length) {
      if (isBalanced(curr)) results.push(curr.join(''));
    } else {
      getAlternatives().forEach((element) => {
        curr[index] = element;
        generate([...curr], index + 1);
      });
    }
  };

  generate();

  return results;
};

export default generateParenthesis;
