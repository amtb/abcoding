import combinationSum, { combinationSumTwo } from './combination-sum';

it('combinationSum', () => {
  const cases = [
    {
      candidates: [2, 3, 5],
      target: 8,
      solution: [
        [2, 2, 2, 2],
        [2, 3, 3],
        [3, 5]
      ]
    },
    {
      candidates: [3, 2, 6, 7, 9],
      target: 7,
      solution: [[7], [2, 2, 3]]
    }
  ];

  const fns = [combinationSum, combinationSumTwo];

  cases.forEach(({ candidates, target, solution }) => {
    fns.forEach((fn) => {
      const computed = fn(candidates, target);
      expect(computed.length).toBe(solution.length);
      expect(computed).toEqual(expect.arrayContaining(solution));
    });
  });
});
