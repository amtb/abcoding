import findCenter from './find-center';

it('findCenter', () => {
  const cases = [
    {
      edges: [
        [1, 2],
        [2, 3],
        [4, 2]
      ],
      result: 2
    },
    {
      edges: [
        [1, 2],
        [5, 1],
        [1, 3],
        [1, 4]
      ],
      result: 1
    }
  ];

  cases.forEach(({ edges, result }) => expect(findCenter(edges)).toBe(result));
});
