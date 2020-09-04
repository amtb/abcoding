import runningSum from './running-sum';

it('runningSum', () => {
  const cases = [
    { i: [1, 2, 3, 4], o: [1, 3, 6, 10] },
    { i: [1, 1, 1, 1, 1], o: [1, 2, 3, 4, 5] }
  ];

  cases.forEach(({ i, o }) => expect(runningSum(i)).toEqual(o));
});
