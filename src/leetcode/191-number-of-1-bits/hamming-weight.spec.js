import hammingWeight, {
  anotherHammingWeight,
  numberOf1Bits
} from './hamming-weight';

it('hammingWeight', () => {
  const fns = [hammingWeight, numberOf1Bits, anotherHammingWeight];

  const cases = [
    { n: 0b00000000000000000000000000001011, ones: 3 },
    { n: 0b00000000000000000000000010000000, ones: 1 },
    { n: 0b11111111111111111111111111111101, ones: 31 }
  ];

  cases.forEach(({ n, ones }) => fns.forEach((fn) => expect(fn(n)).toBe(ones)));
});
