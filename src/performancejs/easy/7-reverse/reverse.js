/**
 * Reverses the given string
 */
export function reverse (string) {
  const len = string.length;
  let reversed = '';

  for (let i = len - 1; i >= 0; i--) {
    reversed += string.charAt(i);
  }

  return reversed;
}
