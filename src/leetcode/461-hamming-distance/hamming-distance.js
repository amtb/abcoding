/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  let distance = 0;
  do {
    const rx = x % 2;
    const ry = y % 2;

    distance += Math.abs(rx - ry);

    x = (x - rx) / 2;
    y = (y - ry) / 2;
  } while (x || y);

  return distance;
};

export default hammingDistance;
