import setZeroes from './set-zeroes';

it('setZeroes', () => {
  const matrix1 = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1]
  ];
  setZeroes(matrix1);
  expect(matrix1).toEqual([
    [1, 0, 1],
    [0, 0, 0],
    [1, 0, 1]
  ]);

  const matrix2 = [
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5]
  ];
  setZeroes(matrix2);
  expect(matrix2).toEqual([
    [0, 0, 0, 0],
    [0, 4, 5, 0],
    [0, 3, 1, 0]
  ]);
});
