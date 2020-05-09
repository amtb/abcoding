/**
 * Returns `true` or `false` indicating whether the given number appears in the given sorted array.
 */
export function includes (array, number) {
  const halfIndex = Math.floor(array.length / 2);
  const half = array[halfIndex];

  if (halfIndex === 0) {
    return half === number;
  } else if (number > half) {
    return includes(array.slice(halfIndex), number);
  } else if (number < half) {
    return includes(array.slice(0, halfIndex), number);
  }

  // lucky winner
  return half === number;
}
