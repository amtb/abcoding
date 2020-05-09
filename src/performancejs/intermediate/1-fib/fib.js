/**
 * Memoized fibonacci
 */
export function fib (n) {
  const values = [0, 1];

  for (let i = 2; i <= n; i++) {
    values.push(
      values[i - 1] + values[i - 2]
    );
  }

  return values[n];
}
