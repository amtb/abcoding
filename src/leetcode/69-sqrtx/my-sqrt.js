/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let sqrt = 0;

  while (sqrt ** 2 <= x) {
    sqrt += 1;
  }

  return sqrt - 1;
};

export default mySqrt;
