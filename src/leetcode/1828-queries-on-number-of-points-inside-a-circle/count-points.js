/**
 * 1828. Queries on Number of Points Inside a Circle
 * https://leetcode.com/problems/queries-on-number-of-points-inside-a-circle/
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */
var countPoints = function (points, queries) {
  return queries.map(([x, y, r]) => {
    const rs = r ** 2;
    return points.reduce((total, [px, py]) => {
      const isIn = (px - x) ** 2 + (py - y) ** 2 <= rs;
      total += isIn ? 1 : 0;
      return total;
    }, 0);
  });
};

export default countPoints;
