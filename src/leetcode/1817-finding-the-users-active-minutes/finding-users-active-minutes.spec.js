import findingUsersActiveMinutes from './finding-users-active-minutes';

it('findingUsersActiveMinutes', () => {
  const cases = [
    {
      inputs: [
        [
          [0, 5],
          [1, 2],
          [0, 2],
          [0, 5],
          [1, 3]
        ],
        5
      ],
      output: [0, 2, 0, 0, 0]
    },
    {
      inputs: [
        [
          [1, 1],
          [2, 2],
          [2, 3]
        ],
        4
      ],
      output: [1, 1, 0, 0]
    }
  ];

  cases.forEach(({ inputs, output }) =>
    expect(findingUsersActiveMinutes(...inputs)).toEqual(output)
  );
});
