/**
 * @param {string} s
 * @return {boolean}
 */
export function isBalanced(s) {
  const mapping = {
    '}': '{',
    ')': '(',
    ']': '['
  };

  const signs = [];
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char === '{' || char === '(' || char === '[') {
      signs.push(char);
    } else if (char === '}' || char === ')' || char === ']') {
      if (signs.pop() !== mapping[char]) {
        return false;
      }
    }
  }

  return signs.length === 0;
}
