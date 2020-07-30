import permuteUnique from './permute-unique';

it('permuteUnique', () => {
  const cases = [
    {
      input: [1, 1, 2],
      permutations: [
        [1, 1, 2],
        [1, 2, 1],
        [2, 1, 1]
      ]
    },
    {
      input: [1, 1, 2, 1, 1, 3, 3, 2],
      permutations: [
        [1, 1, 1, 1, 2, 2, 3, 3],
        [1, 1, 1, 1, 2, 3, 2, 3],
        [1, 1, 1, 1, 2, 3, 3, 2],
        [1, 1, 1, 1, 3, 2, 2, 3],
        [1, 1, 1, 1, 3, 2, 3, 2],
        [1, 1, 1, 1, 3, 3, 2, 2],
        [1, 1, 1, 2, 1, 2, 3, 3],
        [1, 1, 1, 2, 1, 3, 2, 3],
        [1, 1, 1, 2, 1, 3, 3, 2],
        [1, 1, 1, 2, 2, 1, 3, 3],
        [1, 1, 1, 2, 2, 3, 1, 3],
        [1, 1, 1, 2, 2, 3, 3, 1],
        [1, 1, 1, 2, 3, 1, 2, 3],
        [1, 1, 1, 2, 3, 1, 3, 2],
        [1, 1, 1, 2, 3, 2, 1, 3],
        [1, 1, 1, 2, 3, 2, 3, 1],
        [1, 1, 1, 2, 3, 3, 1, 2],
        [1, 1, 1, 2, 3, 3, 2, 1],
        [1, 1, 1, 3, 1, 2, 2, 3],
        [1, 1, 1, 3, 1, 2, 3, 2],
        [1, 1, 1, 3, 1, 3, 2, 2],
        [1, 1, 1, 3, 2, 1, 2, 3],
        [1, 1, 1, 3, 2, 1, 3, 2],
        [1, 1, 1, 3, 2, 2, 1, 3],
        [1, 1, 1, 3, 2, 2, 3, 1],
        [1, 1, 1, 3, 2, 3, 1, 2],
        [1, 1, 1, 3, 2, 3, 2, 1],
        [1, 1, 1, 3, 3, 1, 2, 2],
        [1, 1, 1, 3, 3, 2, 1, 2],
        [1, 1, 1, 3, 3, 2, 2, 1],
        [1, 1, 2, 1, 1, 2, 3, 3],
        [1, 1, 2, 1, 1, 3, 2, 3],
        [1, 1, 2, 1, 1, 3, 3, 2],
        [1, 1, 2, 1, 2, 1, 3, 3],
        [1, 1, 2, 1, 2, 3, 1, 3],
        [1, 1, 2, 1, 2, 3, 3, 1],
        [1, 1, 2, 1, 3, 1, 2, 3],
        [1, 1, 2, 1, 3, 1, 3, 2],
        [1, 1, 2, 1, 3, 2, 1, 3],
        [1, 1, 2, 1, 3, 2, 3, 1],
        [1, 1, 2, 1, 3, 3, 1, 2],
        [1, 1, 2, 1, 3, 3, 2, 1],
        [1, 1, 2, 2, 1, 1, 3, 3],
        [1, 1, 2, 2, 1, 3, 1, 3],
        [1, 1, 2, 2, 1, 3, 3, 1],
        [1, 1, 2, 2, 3, 1, 1, 3],
        [1, 1, 2, 2, 3, 1, 3, 1],
        [1, 1, 2, 2, 3, 3, 1, 1],
        [1, 1, 2, 3, 1, 1, 2, 3],
        [1, 1, 2, 3, 1, 1, 3, 2],
        [1, 1, 2, 3, 1, 2, 1, 3],
        [1, 1, 2, 3, 1, 2, 3, 1],
        [1, 1, 2, 3, 1, 3, 1, 2],
        [1, 1, 2, 3, 1, 3, 2, 1],
        [1, 1, 2, 3, 2, 1, 1, 3],
        [1, 1, 2, 3, 2, 1, 3, 1],
        [1, 1, 2, 3, 2, 3, 1, 1],
        [1, 1, 2, 3, 3, 1, 1, 2],
        [1, 1, 2, 3, 3, 1, 2, 1],
        [1, 1, 2, 3, 3, 2, 1, 1],
        [1, 1, 3, 1, 1, 2, 2, 3],
        [1, 1, 3, 1, 1, 2, 3, 2],
        [1, 1, 3, 1, 1, 3, 2, 2],
        [1, 1, 3, 1, 2, 1, 2, 3],
        [1, 1, 3, 1, 2, 1, 3, 2],
        [1, 1, 3, 1, 2, 2, 1, 3],
        [1, 1, 3, 1, 2, 2, 3, 1],
        [1, 1, 3, 1, 2, 3, 1, 2],
        [1, 1, 3, 1, 2, 3, 2, 1],
        [1, 1, 3, 1, 3, 1, 2, 2],
        [1, 1, 3, 1, 3, 2, 1, 2],
        [1, 1, 3, 1, 3, 2, 2, 1],
        [1, 1, 3, 2, 1, 1, 2, 3],
        [1, 1, 3, 2, 1, 1, 3, 2],
        [1, 1, 3, 2, 1, 2, 1, 3],
        [1, 1, 3, 2, 1, 2, 3, 1],
        [1, 1, 3, 2, 1, 3, 1, 2],
        [1, 1, 3, 2, 1, 3, 2, 1],
        [1, 1, 3, 2, 2, 1, 1, 3],
        [1, 1, 3, 2, 2, 1, 3, 1],
        [1, 1, 3, 2, 2, 3, 1, 1],
        [1, 1, 3, 2, 3, 1, 1, 2],
        [1, 1, 3, 2, 3, 1, 2, 1],
        [1, 1, 3, 2, 3, 2, 1, 1],
        [1, 1, 3, 3, 1, 1, 2, 2],
        [1, 1, 3, 3, 1, 2, 1, 2],
        [1, 1, 3, 3, 1, 2, 2, 1],
        [1, 1, 3, 3, 2, 1, 1, 2],
        [1, 1, 3, 3, 2, 1, 2, 1],
        [1, 1, 3, 3, 2, 2, 1, 1],
        [1, 2, 1, 1, 1, 2, 3, 3],
        [1, 2, 1, 1, 1, 3, 2, 3],
        [1, 2, 1, 1, 1, 3, 3, 2],
        [1, 2, 1, 1, 2, 1, 3, 3],
        [1, 2, 1, 1, 2, 3, 1, 3],
        [1, 2, 1, 1, 2, 3, 3, 1],
        [1, 2, 1, 1, 3, 1, 2, 3],
        [1, 2, 1, 1, 3, 1, 3, 2],
        [1, 2, 1, 1, 3, 2, 1, 3],
        [1, 2, 1, 1, 3, 2, 3, 1],
        [1, 2, 1, 1, 3, 3, 1, 2],
        [1, 2, 1, 1, 3, 3, 2, 1],
        [1, 2, 1, 2, 1, 1, 3, 3],
        [1, 2, 1, 2, 1, 3, 1, 3],
        [1, 2, 1, 2, 1, 3, 3, 1],
        [1, 2, 1, 2, 3, 1, 1, 3],
        [1, 2, 1, 2, 3, 1, 3, 1],
        [1, 2, 1, 2, 3, 3, 1, 1],
        [1, 2, 1, 3, 1, 1, 2, 3],
        [1, 2, 1, 3, 1, 1, 3, 2],
        [1, 2, 1, 3, 1, 2, 1, 3],
        [1, 2, 1, 3, 1, 2, 3, 1],
        [1, 2, 1, 3, 1, 3, 1, 2],
        [1, 2, 1, 3, 1, 3, 2, 1],
        [1, 2, 1, 3, 2, 1, 1, 3],
        [1, 2, 1, 3, 2, 1, 3, 1],
        [1, 2, 1, 3, 2, 3, 1, 1],
        [1, 2, 1, 3, 3, 1, 1, 2],
        [1, 2, 1, 3, 3, 1, 2, 1],
        [1, 2, 1, 3, 3, 2, 1, 1],
        [1, 2, 2, 1, 1, 1, 3, 3],
        [1, 2, 2, 1, 1, 3, 1, 3],
        [1, 2, 2, 1, 1, 3, 3, 1],
        [1, 2, 2, 1, 3, 1, 1, 3],
        [1, 2, 2, 1, 3, 1, 3, 1],
        [1, 2, 2, 1, 3, 3, 1, 1],
        [1, 2, 2, 3, 1, 1, 1, 3],
        [1, 2, 2, 3, 1, 1, 3, 1],
        [1, 2, 2, 3, 1, 3, 1, 1],
        [1, 2, 2, 3, 3, 1, 1, 1],
        [1, 2, 3, 1, 1, 1, 2, 3],
        [1, 2, 3, 1, 1, 1, 3, 2],
        [1, 2, 3, 1, 1, 2, 1, 3],
        [1, 2, 3, 1, 1, 2, 3, 1],
        [1, 2, 3, 1, 1, 3, 1, 2],
        [1, 2, 3, 1, 1, 3, 2, 1],
        [1, 2, 3, 1, 2, 1, 1, 3],
        [1, 2, 3, 1, 2, 1, 3, 1],
        [1, 2, 3, 1, 2, 3, 1, 1],
        [1, 2, 3, 1, 3, 1, 1, 2],
        [1, 2, 3, 1, 3, 1, 2, 1],
        [1, 2, 3, 1, 3, 2, 1, 1],
        [1, 2, 3, 2, 1, 1, 1, 3],
        [1, 2, 3, 2, 1, 1, 3, 1],
        [1, 2, 3, 2, 1, 3, 1, 1],
        [1, 2, 3, 2, 3, 1, 1, 1],
        [1, 2, 3, 3, 1, 1, 1, 2],
        [1, 2, 3, 3, 1, 1, 2, 1],
        [1, 2, 3, 3, 1, 2, 1, 1],
        [1, 2, 3, 3, 2, 1, 1, 1],
        [1, 3, 1, 1, 1, 2, 2, 3],
        [1, 3, 1, 1, 1, 2, 3, 2],
        [1, 3, 1, 1, 1, 3, 2, 2],
        [1, 3, 1, 1, 2, 1, 2, 3],
        [1, 3, 1, 1, 2, 1, 3, 2],
        [1, 3, 1, 1, 2, 2, 1, 3],
        [1, 3, 1, 1, 2, 2, 3, 1],
        [1, 3, 1, 1, 2, 3, 1, 2],
        [1, 3, 1, 1, 2, 3, 2, 1],
        [1, 3, 1, 1, 3, 1, 2, 2],
        [1, 3, 1, 1, 3, 2, 1, 2],
        [1, 3, 1, 1, 3, 2, 2, 1],
        [1, 3, 1, 2, 1, 1, 2, 3],
        [1, 3, 1, 2, 1, 1, 3, 2],
        [1, 3, 1, 2, 1, 2, 1, 3],
        [1, 3, 1, 2, 1, 2, 3, 1],
        [1, 3, 1, 2, 1, 3, 1, 2],
        [1, 3, 1, 2, 1, 3, 2, 1],
        [1, 3, 1, 2, 2, 1, 1, 3],
        [1, 3, 1, 2, 2, 1, 3, 1],
        [1, 3, 1, 2, 2, 3, 1, 1],
        [1, 3, 1, 2, 3, 1, 1, 2],
        [1, 3, 1, 2, 3, 1, 2, 1],
        [1, 3, 1, 2, 3, 2, 1, 1],
        [1, 3, 1, 3, 1, 1, 2, 2],
        [1, 3, 1, 3, 1, 2, 1, 2],
        [1, 3, 1, 3, 1, 2, 2, 1],
        [1, 3, 1, 3, 2, 1, 1, 2],
        [1, 3, 1, 3, 2, 1, 2, 1],
        [1, 3, 1, 3, 2, 2, 1, 1],
        [1, 3, 2, 1, 1, 1, 2, 3],
        [1, 3, 2, 1, 1, 1, 3, 2],
        [1, 3, 2, 1, 1, 2, 1, 3],
        [1, 3, 2, 1, 1, 2, 3, 1],
        [1, 3, 2, 1, 1, 3, 1, 2],
        [1, 3, 2, 1, 1, 3, 2, 1],
        [1, 3, 2, 1, 2, 1, 1, 3],
        [1, 3, 2, 1, 2, 1, 3, 1],
        [1, 3, 2, 1, 2, 3, 1, 1],
        [1, 3, 2, 1, 3, 1, 1, 2],
        [1, 3, 2, 1, 3, 1, 2, 1],
        [1, 3, 2, 1, 3, 2, 1, 1],
        [1, 3, 2, 2, 1, 1, 1, 3],
        [1, 3, 2, 2, 1, 1, 3, 1],
        [1, 3, 2, 2, 1, 3, 1, 1],
        [1, 3, 2, 2, 3, 1, 1, 1],
        [1, 3, 2, 3, 1, 1, 1, 2],
        [1, 3, 2, 3, 1, 1, 2, 1],
        [1, 3, 2, 3, 1, 2, 1, 1],
        [1, 3, 2, 3, 2, 1, 1, 1],
        [1, 3, 3, 1, 1, 1, 2, 2],
        [1, 3, 3, 1, 1, 2, 1, 2],
        [1, 3, 3, 1, 1, 2, 2, 1],
        [1, 3, 3, 1, 2, 1, 1, 2],
        [1, 3, 3, 1, 2, 1, 2, 1],
        [1, 3, 3, 1, 2, 2, 1, 1],
        [1, 3, 3, 2, 1, 1, 1, 2],
        [1, 3, 3, 2, 1, 1, 2, 1],
        [1, 3, 3, 2, 1, 2, 1, 1],
        [1, 3, 3, 2, 2, 1, 1, 1],
        [2, 1, 1, 1, 1, 2, 3, 3],
        [2, 1, 1, 1, 1, 3, 2, 3],
        [2, 1, 1, 1, 1, 3, 3, 2],
        [2, 1, 1, 1, 2, 1, 3, 3],
        [2, 1, 1, 1, 2, 3, 1, 3],
        [2, 1, 1, 1, 2, 3, 3, 1],
        [2, 1, 1, 1, 3, 1, 2, 3],
        [2, 1, 1, 1, 3, 1, 3, 2],
        [2, 1, 1, 1, 3, 2, 1, 3],
        [2, 1, 1, 1, 3, 2, 3, 1],
        [2, 1, 1, 1, 3, 3, 1, 2],
        [2, 1, 1, 1, 3, 3, 2, 1],
        [2, 1, 1, 2, 1, 1, 3, 3],
        [2, 1, 1, 2, 1, 3, 1, 3],
        [2, 1, 1, 2, 1, 3, 3, 1],
        [2, 1, 1, 2, 3, 1, 1, 3],
        [2, 1, 1, 2, 3, 1, 3, 1],
        [2, 1, 1, 2, 3, 3, 1, 1],
        [2, 1, 1, 3, 1, 1, 2, 3],
        [2, 1, 1, 3, 1, 1, 3, 2],
        [2, 1, 1, 3, 1, 2, 1, 3],
        [2, 1, 1, 3, 1, 2, 3, 1],
        [2, 1, 1, 3, 1, 3, 1, 2],
        [2, 1, 1, 3, 1, 3, 2, 1],
        [2, 1, 1, 3, 2, 1, 1, 3],
        [2, 1, 1, 3, 2, 1, 3, 1],
        [2, 1, 1, 3, 2, 3, 1, 1],
        [2, 1, 1, 3, 3, 1, 1, 2],
        [2, 1, 1, 3, 3, 1, 2, 1],
        [2, 1, 1, 3, 3, 2, 1, 1],
        [2, 1, 2, 1, 1, 1, 3, 3],
        [2, 1, 2, 1, 1, 3, 1, 3],
        [2, 1, 2, 1, 1, 3, 3, 1],
        [2, 1, 2, 1, 3, 1, 1, 3],
        [2, 1, 2, 1, 3, 1, 3, 1],
        [2, 1, 2, 1, 3, 3, 1, 1],
        [2, 1, 2, 3, 1, 1, 1, 3],
        [2, 1, 2, 3, 1, 1, 3, 1],
        [2, 1, 2, 3, 1, 3, 1, 1],
        [2, 1, 2, 3, 3, 1, 1, 1],
        [2, 1, 3, 1, 1, 1, 2, 3],
        [2, 1, 3, 1, 1, 1, 3, 2],
        [2, 1, 3, 1, 1, 2, 1, 3],
        [2, 1, 3, 1, 1, 2, 3, 1],
        [2, 1, 3, 1, 1, 3, 1, 2],
        [2, 1, 3, 1, 1, 3, 2, 1],
        [2, 1, 3, 1, 2, 1, 1, 3],
        [2, 1, 3, 1, 2, 1, 3, 1],
        [2, 1, 3, 1, 2, 3, 1, 1],
        [2, 1, 3, 1, 3, 1, 1, 2],
        [2, 1, 3, 1, 3, 1, 2, 1],
        [2, 1, 3, 1, 3, 2, 1, 1],
        [2, 1, 3, 2, 1, 1, 1, 3],
        [2, 1, 3, 2, 1, 1, 3, 1],
        [2, 1, 3, 2, 1, 3, 1, 1],
        [2, 1, 3, 2, 3, 1, 1, 1],
        [2, 1, 3, 3, 1, 1, 1, 2],
        [2, 1, 3, 3, 1, 1, 2, 1],
        [2, 1, 3, 3, 1, 2, 1, 1],
        [2, 1, 3, 3, 2, 1, 1, 1],
        [2, 2, 1, 1, 1, 1, 3, 3],
        [2, 2, 1, 1, 1, 3, 1, 3],
        [2, 2, 1, 1, 1, 3, 3, 1],
        [2, 2, 1, 1, 3, 1, 1, 3],
        [2, 2, 1, 1, 3, 1, 3, 1],
        [2, 2, 1, 1, 3, 3, 1, 1],
        [2, 2, 1, 3, 1, 1, 1, 3],
        [2, 2, 1, 3, 1, 1, 3, 1],
        [2, 2, 1, 3, 1, 3, 1, 1],
        [2, 2, 1, 3, 3, 1, 1, 1],
        [2, 2, 3, 1, 1, 1, 1, 3],
        [2, 2, 3, 1, 1, 1, 3, 1],
        [2, 2, 3, 1, 1, 3, 1, 1],
        [2, 2, 3, 1, 3, 1, 1, 1],
        [2, 2, 3, 3, 1, 1, 1, 1],
        [2, 3, 1, 1, 1, 1, 2, 3],
        [2, 3, 1, 1, 1, 1, 3, 2],
        [2, 3, 1, 1, 1, 2, 1, 3],
        [2, 3, 1, 1, 1, 2, 3, 1],
        [2, 3, 1, 1, 1, 3, 1, 2],
        [2, 3, 1, 1, 1, 3, 2, 1],
        [2, 3, 1, 1, 2, 1, 1, 3],
        [2, 3, 1, 1, 2, 1, 3, 1],
        [2, 3, 1, 1, 2, 3, 1, 1],
        [2, 3, 1, 1, 3, 1, 1, 2],
        [2, 3, 1, 1, 3, 1, 2, 1],
        [2, 3, 1, 1, 3, 2, 1, 1],
        [2, 3, 1, 2, 1, 1, 1, 3],
        [2, 3, 1, 2, 1, 1, 3, 1],
        [2, 3, 1, 2, 1, 3, 1, 1],
        [2, 3, 1, 2, 3, 1, 1, 1],
        [2, 3, 1, 3, 1, 1, 1, 2],
        [2, 3, 1, 3, 1, 1, 2, 1],
        [2, 3, 1, 3, 1, 2, 1, 1],
        [2, 3, 1, 3, 2, 1, 1, 1],
        [2, 3, 2, 1, 1, 1, 1, 3],
        [2, 3, 2, 1, 1, 1, 3, 1],
        [2, 3, 2, 1, 1, 3, 1, 1],
        [2, 3, 2, 1, 3, 1, 1, 1],
        [2, 3, 2, 3, 1, 1, 1, 1],
        [2, 3, 3, 1, 1, 1, 1, 2],
        [2, 3, 3, 1, 1, 1, 2, 1],
        [2, 3, 3, 1, 1, 2, 1, 1],
        [2, 3, 3, 1, 2, 1, 1, 1],
        [2, 3, 3, 2, 1, 1, 1, 1],
        [3, 1, 1, 1, 1, 2, 2, 3],
        [3, 1, 1, 1, 1, 2, 3, 2],
        [3, 1, 1, 1, 1, 3, 2, 2],
        [3, 1, 1, 1, 2, 1, 2, 3],
        [3, 1, 1, 1, 2, 1, 3, 2],
        [3, 1, 1, 1, 2, 2, 1, 3],
        [3, 1, 1, 1, 2, 2, 3, 1],
        [3, 1, 1, 1, 2, 3, 1, 2],
        [3, 1, 1, 1, 2, 3, 2, 1],
        [3, 1, 1, 1, 3, 1, 2, 2],
        [3, 1, 1, 1, 3, 2, 1, 2],
        [3, 1, 1, 1, 3, 2, 2, 1],
        [3, 1, 1, 2, 1, 1, 2, 3],
        [3, 1, 1, 2, 1, 1, 3, 2],
        [3, 1, 1, 2, 1, 2, 1, 3],
        [3, 1, 1, 2, 1, 2, 3, 1],
        [3, 1, 1, 2, 1, 3, 1, 2],
        [3, 1, 1, 2, 1, 3, 2, 1],
        [3, 1, 1, 2, 2, 1, 1, 3],
        [3, 1, 1, 2, 2, 1, 3, 1],
        [3, 1, 1, 2, 2, 3, 1, 1],
        [3, 1, 1, 2, 3, 1, 1, 2],
        [3, 1, 1, 2, 3, 1, 2, 1],
        [3, 1, 1, 2, 3, 2, 1, 1],
        [3, 1, 1, 3, 1, 1, 2, 2],
        [3, 1, 1, 3, 1, 2, 1, 2],
        [3, 1, 1, 3, 1, 2, 2, 1],
        [3, 1, 1, 3, 2, 1, 1, 2],
        [3, 1, 1, 3, 2, 1, 2, 1],
        [3, 1, 1, 3, 2, 2, 1, 1],
        [3, 1, 2, 1, 1, 1, 2, 3],
        [3, 1, 2, 1, 1, 1, 3, 2],
        [3, 1, 2, 1, 1, 2, 1, 3],
        [3, 1, 2, 1, 1, 2, 3, 1],
        [3, 1, 2, 1, 1, 3, 1, 2],
        [3, 1, 2, 1, 1, 3, 2, 1],
        [3, 1, 2, 1, 2, 1, 1, 3],
        [3, 1, 2, 1, 2, 1, 3, 1],
        [3, 1, 2, 1, 2, 3, 1, 1],
        [3, 1, 2, 1, 3, 1, 1, 2],
        [3, 1, 2, 1, 3, 1, 2, 1],
        [3, 1, 2, 1, 3, 2, 1, 1],
        [3, 1, 2, 2, 1, 1, 1, 3],
        [3, 1, 2, 2, 1, 1, 3, 1],
        [3, 1, 2, 2, 1, 3, 1, 1],
        [3, 1, 2, 2, 3, 1, 1, 1],
        [3, 1, 2, 3, 1, 1, 1, 2],
        [3, 1, 2, 3, 1, 1, 2, 1],
        [3, 1, 2, 3, 1, 2, 1, 1],
        [3, 1, 2, 3, 2, 1, 1, 1],
        [3, 1, 3, 1, 1, 1, 2, 2],
        [3, 1, 3, 1, 1, 2, 1, 2],
        [3, 1, 3, 1, 1, 2, 2, 1],
        [3, 1, 3, 1, 2, 1, 1, 2],
        [3, 1, 3, 1, 2, 1, 2, 1],
        [3, 1, 3, 1, 2, 2, 1, 1],
        [3, 1, 3, 2, 1, 1, 1, 2],
        [3, 1, 3, 2, 1, 1, 2, 1],
        [3, 1, 3, 2, 1, 2, 1, 1],
        [3, 1, 3, 2, 2, 1, 1, 1],
        [3, 2, 1, 1, 1, 1, 2, 3],
        [3, 2, 1, 1, 1, 1, 3, 2],
        [3, 2, 1, 1, 1, 2, 1, 3],
        [3, 2, 1, 1, 1, 2, 3, 1],
        [3, 2, 1, 1, 1, 3, 1, 2],
        [3, 2, 1, 1, 1, 3, 2, 1],
        [3, 2, 1, 1, 2, 1, 1, 3],
        [3, 2, 1, 1, 2, 1, 3, 1],
        [3, 2, 1, 1, 2, 3, 1, 1],
        [3, 2, 1, 1, 3, 1, 1, 2],
        [3, 2, 1, 1, 3, 1, 2, 1],
        [3, 2, 1, 1, 3, 2, 1, 1],
        [3, 2, 1, 2, 1, 1, 1, 3],
        [3, 2, 1, 2, 1, 1, 3, 1],
        [3, 2, 1, 2, 1, 3, 1, 1],
        [3, 2, 1, 2, 3, 1, 1, 1],
        [3, 2, 1, 3, 1, 1, 1, 2],
        [3, 2, 1, 3, 1, 1, 2, 1],
        [3, 2, 1, 3, 1, 2, 1, 1],
        [3, 2, 1, 3, 2, 1, 1, 1],
        [3, 2, 2, 1, 1, 1, 1, 3],
        [3, 2, 2, 1, 1, 1, 3, 1],
        [3, 2, 2, 1, 1, 3, 1, 1],
        [3, 2, 2, 1, 3, 1, 1, 1],
        [3, 2, 2, 3, 1, 1, 1, 1],
        [3, 2, 3, 1, 1, 1, 1, 2],
        [3, 2, 3, 1, 1, 1, 2, 1],
        [3, 2, 3, 1, 1, 2, 1, 1],
        [3, 2, 3, 1, 2, 1, 1, 1],
        [3, 2, 3, 2, 1, 1, 1, 1],
        [3, 3, 1, 1, 1, 1, 2, 2],
        [3, 3, 1, 1, 1, 2, 1, 2],
        [3, 3, 1, 1, 1, 2, 2, 1],
        [3, 3, 1, 1, 2, 1, 1, 2],
        [3, 3, 1, 1, 2, 1, 2, 1],
        [3, 3, 1, 1, 2, 2, 1, 1],
        [3, 3, 1, 2, 1, 1, 1, 2],
        [3, 3, 1, 2, 1, 1, 2, 1],
        [3, 3, 1, 2, 1, 2, 1, 1],
        [3, 3, 1, 2, 2, 1, 1, 1],
        [3, 3, 2, 1, 1, 1, 1, 2],
        [3, 3, 2, 1, 1, 1, 2, 1],
        [3, 3, 2, 1, 1, 2, 1, 1],
        [3, 3, 2, 1, 2, 1, 1, 1],
        [3, 3, 2, 2, 1, 1, 1, 1]
      ]
    }
  ];

  cases.forEach(({ input, permutations }) => {
    const result = permuteUnique(input);
    expect(result).toEqual(expect.arrayContaining(permutations));
    expect(result.length).toBe(permutations.length);
  });
});