/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  const maxCandies = Math.max(...candies);
  const result = [];

  candies.forEach((value) => result.push(value + extraCandies >= maxCandies));

  return result;
};

export default kidsWithCandies;
