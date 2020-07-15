import moveZeroes from './move-zeroes';

it('moveZeroes', () => {
  const array = [0, 1, 0, 3, 12];
  moveZeroes(array);
  expect(array).toEqual([1, 3, 12, 0, 0]);
});
