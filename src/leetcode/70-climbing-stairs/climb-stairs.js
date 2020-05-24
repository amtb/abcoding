/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  const jumps = [1, 1];

  for (let i = 2; i <= n; i++) {
    jumps.push(jumps[i - 2] + jumps[i - 1]);
  }

  return jumps[n];
};

export default climbStairs;
