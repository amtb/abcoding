import permute from './permute';

it('permute', () => {
  const cases = [
    {
      numbers: [1, 2, 3],
      out: [
        [1, 2, 3],
        [1, 3, 2],
        [2, 1, 3],
        [2, 3, 1],
        [3, 1, 2],
        [3, 2, 1]
      ]
    },
    {
      numbers: [1, 2],
      out: [
        [1, 2],
        [2, 1]
      ]
    },
    { numbers: [2], out: [[2]] }
  ];

  cases.forEach(({ numbers, out }) =>
    expect(permute(numbers)).toEqual(expect.arrayContaining(out))
  );
});
