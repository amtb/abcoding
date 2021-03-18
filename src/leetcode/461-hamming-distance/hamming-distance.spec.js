import hammingDistance from './hamming-distance';

it('hammingDistance', () => {
  expect(hammingDistance(4, 4)).toBe(0);
  expect(hammingDistance(1, 4)).toBe(2);
  expect(hammingDistance(5, 0)).toBe(2);
});
