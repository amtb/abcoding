import gameOfLife from './game-of-life';

it('gameOfLife', () => {
  const cases = [
    {
      board: [
        [0, 1, 0],
        [0, 0, 1],
        [1, 1, 1],
        [0, 0, 0]
      ],
      out: [
        [0, 0, 0],
        [1, 0, 1],
        [0, 1, 1],
        [0, 1, 0]
      ]
    }
  ];

  cases.forEach(({ board, out }) => {
    gameOfLife(board);
    expect(board).toEqual(out);
  });
});
