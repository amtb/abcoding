/**
 * 1833. Maximum Ice Cream Bars
 * https://leetcode.com/problems/maximum-ice-cream-bars/
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function (costs, coins) {
  costs.sort((a, b) => a - b);

  let i = 0;
  while (coins >= costs[i]) {
    coins -= costs[i++];
  }

  return i;
};

export default maxIceCream;
