/**
 * The reduce() funcdtion executes a reducer function on each element of the array, resulting in a single output value.
 */
export async function reduceAsync (array, fn, initial) {
  async function exec (item) {
    return await item();
  }

  const start = initial !== undefined ? 0 : 1;
  initial = initial !== undefined ? initial : await exec(array[0]);

  for (let i = start; i < array.length; i++) {
    initial = fn(initial, await exec(array[i]));
  }

  return initial;
}
