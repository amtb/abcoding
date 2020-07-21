import { MaxHeap } from '../../ds/';

class Point {
  constructor([x, y]) {
    this.coordinates = [x, y];
    this.distance = x ** 2 + y ** 2;
  }

  [Symbol.toPrimitive]() {
    return this.distance;
  }
}

/**
 * k closest points
 */
export function kClosestPoints(inputs, K) {
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

/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
export function kClosestPts(points, K) {
  const maxHeap = new MaxHeap();
  points.forEach((coordinates) => {
    maxHeap.insert(new Point(coordinates));
    if (maxHeap.size > K) {
      maxHeap.deleteMax();
    }
  });

  return maxHeap.elements.map((point) => point.coordinates);
}

export default kClosest;
