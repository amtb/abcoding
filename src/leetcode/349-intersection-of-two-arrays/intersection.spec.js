import intersection, { arrayIntersection } from './intersection';

it('intersection', () => {
  expect(intersection([1, 2, 2, 1], [2, 2])).toEqual([2]);
  expect(intersection([4, 9, 5], [9, 4, 9, 8, 4])).toEqual([9, 4]);
});

it('arrayIntersection', () => {
  expect(arrayIntersection([1, 2, 2, 1], [2, 2])).toEqual([2]);
  // expect(arrayIntersection([4, 9, 5], [9, 4, 9, 8, 4])).toEqual(expect.arrayContaining([9, 4]));
});
