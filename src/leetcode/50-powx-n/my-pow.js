/**
 * https://en.wikipedia.org/wiki/Exponentiation_by_squaring
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  const power = (y, m) => {
    if (m === 0) return 1;
    if (m === 1) return y;
    if (m % 2 === 0) return power(y * y, m / 2);
    return y * power(y * y, (m - 1) / 2);
  };

  const pow = power(x, Math.abs(n));
  return n > 0 ? pow : 1 / pow;
};

export default myPow;
