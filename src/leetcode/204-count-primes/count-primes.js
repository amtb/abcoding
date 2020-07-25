/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  const numbers = Array.from({ length: n });

  /** cross all multiple of "i" */
  const cross = (i) => {
    let k = 2;
    while (i * k <= n) {
      numbers[i * k] = 'x';
      k++;
    }
  };

  // fill in the numbers and cross
  let count = 0;
  for (let i = 2; i < n; i++) {
    if (numbers[i] === undefined) {
      count++;
      numbers[i] = i;
      cross(i);
    }
  }

  return count;
};

export default countPrimes;
