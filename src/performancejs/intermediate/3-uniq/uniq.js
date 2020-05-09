/**
 * computes unique values from an array
 */
export function uniq (array) {
  const uniques = []; const hash = {};
  array.forEach((value) => {
    if (hash[value] === undefined) {
      hash[value] = true;
      uniques.push(value);
    }
  });

  return uniques;
}
