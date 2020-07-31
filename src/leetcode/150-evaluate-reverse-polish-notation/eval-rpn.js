/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const operations = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => (Math.sign(a * b) > 0 ? Math.floor(a / b) : Math.ceil(a / b))
  };

  const stack = [];

  for (let i = 0; i < tokens.length; i++) {
    const element = tokens[i];
    const fn = operations[element];

    if (typeof fn === 'function') {
      const b = stack.pop();
      const a = stack.pop();
      stack.push(fn(a, b));
    } else {
      stack.push(+element);
    }
  }

  return stack[0];
};

export default evalRPN;
