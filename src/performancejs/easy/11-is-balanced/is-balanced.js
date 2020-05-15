export function isBalanced(string) {
  const chars = string.split('');
  const brackets = [];
  for (let i = 0, len = chars.length; i < len; i++) {
    const char = chars[i];
    if (char === '{') {
      brackets.push(char);
    } else if (char === '}') {
      const popped = brackets.pop();
      if (popped !== '{') {
        return false;
      }
    }
  }

  return brackets.length === 0;
}
