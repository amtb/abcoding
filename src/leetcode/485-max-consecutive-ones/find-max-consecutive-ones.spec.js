import findMaxConsecutiveOnes from './find-max-consecutive-ones';

it('findMaxConsecutiveOnes', () => {
  const cases = [
    {
      inputs: [[1, 1, 0, 1, 1, 1]],
      output: 3
    },
    { inputs: [[1, 0, 1, 1, 0, 1]], output: 2 }
  ];

  cases.forEach(({ inputs, output }) =>
    expect(findMaxConsecutiveOnes(...inputs)).toBe(output)
  );
});
