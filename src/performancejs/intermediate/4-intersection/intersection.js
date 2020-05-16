/**
 * Find the intersection of two arrays.
 */
export function intersection(array1, array2) {
  const set2 = new Set(array2);

  const found = [];
  for (const i of array1) {
    if (set2.has(i)) {
      found.push(i);
    }
  }

  return found;
}
