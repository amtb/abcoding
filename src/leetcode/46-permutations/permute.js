/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const permutations = [];

  /**
   * @return {Set<number>}
   */
  const getAlternatives = (curr, index) => {
    const alternatives = new Set(nums);
    for (let i = 0; i < index; i++) {
      alternatives.delete(curr[i]);
    }

    return alternatives;
  };

  /**
   * @param {number[]} curr
   */
  const generate = (curr, index = 0) => {
    if (index === nums.length) {
      permutations.push([...curr]);
    } else {
      const alternatives = getAlternatives(curr, index);
      alternatives.forEach((alternative) => {
        curr[index] = alternative;
        generate(curr, index + 1);
      });
    }
  };

  const curr = [...nums];
  generate(curr);

  return permutations;
};

export default permute;
