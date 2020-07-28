import exist from './exist';

it('exist', () => {
  const cases = [
    {
      board: [
        ['A', 'B', 'C', 'E'],
        ['S', 'F', 'C', 'S'],
        ['A', 'D', 'E', 'E']
      ],
      tests: {
        ABCCED: true,
        SEE: true,
        ABCB: false
      }
    },
    {
      board: [
        ['C', 'A', 'A'],
        ['A', 'A', 'A'],
        ['B', 'C', 'D']
      ],
      tests: {
        AAB: true
      }
    },
    {
      board: [['a', 'b']],
      tests: {
        ba: true
      }
    }
  ];

  cases.forEach(({ board, tests }) =>
    Object.entries(tests).forEach(([word, exists]) =>
      expect(exist(board, word)).toBe(exists)
    )
  );
});
