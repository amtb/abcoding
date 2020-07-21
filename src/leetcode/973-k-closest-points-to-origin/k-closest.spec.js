import kClosest, { kClosestPoints, kClosestPts } from './k-closest';

it('kClosest', () => {
  const fns = [kClosest, kClosestPoints, kClosestPts];
  const cases = [
    {
      in: {
        points: [
          [1, 3],
          [-2, 2]
        ],
        k: 1
      },
      out: [[-2, 2]]
    },
    {
      in: {
        points: [
          [3, 3],
          [5, -1],
          [-2, 4]
        ],
        k: 2
      },
      out: [
        [3, 3],
        [-2, 4]
      ]
    }
  ];

  cases.forEach(({ in: { points, k }, out: expected }) => {
    fns.forEach((fn) =>
      expect(fn(points, k)).toEqual(expect.arrayContaining(expected))
    );
  });
});
