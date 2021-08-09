/**
 * sorts an array
 */
export function quicksort (array) {
  const len = array.length;
  const left = [];
  const right = [];

  if (len <= 1) {
    return array;
  }

  const pivot = array[0];

  for (let i = 1; i < len; i++) {
    const v = array[i];
    if (v <= pivot) {
      left.push(v);
    } else {
      right.push(v);
    }
  }

  return [...quicksort(left), pivot, ...quicksort(right)];
}

export function compareSorts () {
  const bigArray = [];
  const max = Math.pow(2, 20);
  console.time('generation');
  for (let i = 0; i < max; i++) {
    bigArray.push(Math.floor(Math.random() * max));
  }
  console.timeEnd('generation');

  console.time('quicksort');
  quicksort(bigArray);
  console.timeEnd('quicksort');

  console.time('array.sort()');
  bigArray.sort();
  console.timeEnd('array.sort()');
}
