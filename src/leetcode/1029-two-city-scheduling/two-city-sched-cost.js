/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function (costs) {
  // sort by "saving" made when sent to city A
  const saving = ([a, b]) => a - b;
  costs.sort((a, b) => saving(a) - saving(b));

  // take the first n to city A, and the rest to B
  let min = 0;
  for (let i = 0; i < costs.length; i++) {
    min += i < costs.length / 2 ? costs[i][0] : costs[i][1];
  }

  return min;
};

export default twoCitySchedCost;
