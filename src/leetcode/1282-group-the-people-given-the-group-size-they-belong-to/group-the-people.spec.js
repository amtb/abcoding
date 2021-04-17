import groupThePeople from './group-the-people';

it('groupThePeople', () => {
  const cases = [
    { inputs: [[3, 3, 3, 3, 3, 1, 3]], output: [[5], [0, 1, 2], [3, 4, 6]] },
    { inputs: [[2, 1, 3, 3, 3, 2]], output: [[1], [0, 5], [2, 3, 4]] }
  ];

  cases.forEach(({ inputs, output }) =>
    expect(groupThePeople(...inputs)).toEqual(output)
  );
});
