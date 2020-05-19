/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function (points, K) {
  const distances = points.map((point) => {
    const [x, y] = point;
    return {
      point,
      distance: Math.pow(x, 2) + Math.pow(y, 2)
    };
  });

  distances.sort((a, b) => a.distance - b.distance);

  const res = [];

  for (let i = 0; i < K; i++) {
    res.push(distances[i].point);
  }

  return res;
};

export default kClosest;
