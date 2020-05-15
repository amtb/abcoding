/**
 * The reduce() funcdtion executes a reducer function on each element of the array, resulting in a single output value.
 */
export function reduce(array, fn, initial) {
  const start = initial !== undefined ? 0 : 1;
  initial = initial !== undefined ? initial : array[0];

  for (let i = start; i < array.length; i++) {
    initial = fn(initial, array[i]);
  }

  return initial;
}
