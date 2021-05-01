/**
 * 1637. Widest Vertical Area Between Two Points Containing No Points
 * https://leetcode.com/problems/widest-vertical-area-between-two-points-containing-no-points/
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function (points) {
  points.sort(([xa], [xb]) => xa - xb);

  let max = -1;
  for (let i = 1; i < points.length; i++) {
    max = Math.max(max, points[i][0] - points[i - 1][0]);
  }

  return max;
};

export default maxWidthOfVerticalArea;
