import allPathsSourceTarget from './all-paths-source-target';

it('allPathsSourceTarget', () => {
  const cases = [
    {
      graph: [[1, 2], [3], [3], []],
      paths: [
        [0, 1, 3],
        [0, 2, 3]
      ]
    },
    {
      graph: [[4, 3, 1], [3, 2, 4], [3], [4], []],
      paths: [
        [0, 4],
        [0, 3, 4],
        [0, 1, 3, 4],
        [0, 1, 2, 3, 4],
        [0, 1, 4]
      ]
    },
    {
      graph: [[1], []],
      paths: [[0, 1]]
    },
    {
      graph: [[1, 2, 3], [2], [3], []],
      paths: [
        [0, 1, 2, 3],
        [0, 2, 3],
        [0, 3]
      ]
    },
    {
      graph: [[1, 3], [2], [3], []],
      paths: [
        [0, 1, 2, 3],
        [0, 3]
      ]
    }
  ];

  cases.forEach(({ graph, paths }) =>
    expect(allPathsSourceTarget(graph)).toEqual(paths)
  );
});
