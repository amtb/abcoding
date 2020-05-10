/**
 * @param {string} s
 * @return {boolean}
 */
export function isBalanced (s) {
  const chars = s.split('');
  const brackets = [];
  for (let i = 0, len = chars.length; i < len; i++) {
    const char = chars[i];
    if (char === '{' || char === '(' || char === '[') {
      brackets.push(char);
    } else if (char === '}') {
      const popped = brackets.pop();
      if (popped !== '{') {
        return false;
      }
    } else if (char === ')') {
      const popped = brackets.pop();
      if (popped !== '(') {
        return false;
      }
    } else if (char === ']') {
      const popped = brackets.pop();
      if (popped !== '[') {
        return false;
      }
    }
  }

  return brackets.length === 0;
}
