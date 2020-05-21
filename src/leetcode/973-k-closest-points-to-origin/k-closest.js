/**
 * k closest points
 */
export function kClosestPoints(inputs, K) {
  class Point {
    constructor([x, y]) {
      this.coordinates = [x, y];
      this.distance = x ** 2 + y ** 2;
    }

    [Symbol.toPrimitive]() {
      return this.distance;
    }
  }
  const points = inputs
    .map((coordinates) => new Point(coordinates))
    .sort((a, b) => a - b);

  const res = [];
  for (let i = 0; i < K; i++) {
    res.push(points[i].coordinates);
  }

  return res;
}

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
