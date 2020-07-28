/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const permutations = [];

  /**
   * @param {number[]} indexes
   * @returns {number[]} possible alternatives at index
   */
  const getAlternatives = (indexes, index) => {
    const alternatives = [];
    const added = new Set();
    const sIndexes = new Set();

    for (let i = 0; i <= index; i++) sIndexes.add(indexes[i]);

    for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
      // add indexes that are not currently used,
      // and only one index per repeated number
      if (!sIndexes.has(i) && !added.has(num)) {
        added.add(num);
        alternatives.push(i);
      }
    }

    return alternatives;
  };

  /**
   * @param {number[]} indexes
   */
  const permute = (indexes, index = 0) => {
    if (index === nums.length) {
      permutations.push(indexes.map((i) => nums[i]));
    } else {
      const alternatives = getAlternatives(indexes, index);
      alternatives.forEach((alternative) => {
        indexes[index] = alternative;
        permute([...indexes], index + 1);
      });
    }
  };

  permute(Array.from({ length: nums.length }));

  return permutations;
};

export default permuteUnique;
