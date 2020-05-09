import maxSubArray from './max-sub-array';

it('maxSubArray', () => {
  expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
  expect(maxSubArray([1, -1, 1])).toBe(1);
});
