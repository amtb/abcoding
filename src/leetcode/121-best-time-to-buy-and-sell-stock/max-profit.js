/**
 * brute force
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function (prices) {
//   let maxProfit = 0;
//   const len = prices.length;
//   for (let i = 0; i < len - 1; i++) {
//     for (let j = i + 1; j < len; j++) {
//       const diff = prices[j] - prices[i];
//       if (diff > 0 && diff > maxProfit) {
//         maxProfit = diff;
//       }
//     }
//   }
//   return maxProfit;
// };
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let min = Infinity;
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    const curr = prices[i];
    min = Math.min(min, curr);
    maxProfit = Math.max(maxProfit, curr - min);
  }
  return maxProfit;
};

export default maxProfit;
