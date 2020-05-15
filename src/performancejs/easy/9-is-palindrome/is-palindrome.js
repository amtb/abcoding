/**
 * Return true or false indicating whether the given string is a plaindrome
 * (case and space insensitive).
 */
export function isPalindrome(string) {
  const stripped = string.replace(/ /g, '').toLowerCase();
  const len = stripped.length;
  const half = len / 2;

  for (let i = 0; i <= half; i++) {
    if (stripped[i] !== stripped[len - i - 1]) {
      return false;
    }
  }

  return true;
}
