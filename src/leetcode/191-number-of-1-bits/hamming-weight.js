/**
 * https://en.wikipedia.org/wiki/Hamming_weight
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  let count = 0;

  while (n) {
    n = n & (n - 1);
    count++;
  }

  return count;
};

/**
 * @param {number} n
 * @returns {number}
 */
export function numberOf1Bits(n) {
  let count = 0;
  for (let i = 0; i < 32; i++) {
    // 2^i (1, 2, 4 ... ith bit at 1 - rest = 0)
    const mask = 1 << i;
    // n & mask will yield the ith bit of n
    count += n & mask ? 1 : 0;
  }

  return count;
}

export function anotherHammingWeight(n) {
  let count = 0;
  do {
    const r = n % 2;
    count += r;
    n = (n - r) / 2;
  } while (n);

  return count;
}

export default hammingWeight;
