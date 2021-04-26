import NumArray from './num-array';

it('NumArray', () => {
  const numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
  expect(numArray.sumRange(0, 2)).toBe(1); // return (-2) + 0 + 3 = 1
  expect(numArray.sumRange(2, 5)).toBe(-1); // return 3 + (-5) + 2 + (-1) = -1
  expect(numArray.sumRange(0, 5)).toBe(-3); // return (-2) + 0 + 3 + (-5) + 2 + (-1) = -3
});
