import kClosest, { kClosestPoints } from './k-closest';

it('kClosest', () => {
  expect(
    kClosest(
      [
        [1, 3],
        [-2, 2]
      ],
      1
    )
  ).toEqual([[-2, 2]]);
  expect(
    kClosest(
      [
        [3, 3],
        [5, -1],
        [-2, 4]
      ],
      2
    )
  ).toEqual([
    [3, 3],
    [-2, 4]
  ]);
});

it('kClosestPoints', () => {
  expect(
    kClosestPoints(
      [
        [1, 3],
        [-2, 2]
      ],
      1
    )
  ).toEqual([[-2, 2]]);
  expect(
    kClosestPoints(
      [
        [3, 3],
        [5, -1],
        [-2, 4]
      ],
      2
    )
  ).toEqual([
    [3, 3],
    [-2, 4]
  ]);
});
