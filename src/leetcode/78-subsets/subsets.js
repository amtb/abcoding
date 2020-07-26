/**
 * CS Dojo https://www.youtube.com/watch?v=bGC2fNALbNU
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const all = [];

  const generate = (curr, index) => {
    if (index === nums.length) {
      all.push(curr.filter((e) => e !== undefined));
    } else {
      // exclude
      curr[index] = undefined;
      generate(curr, index + 1);

      // include
      curr[index] = nums[index];
      generate(curr, index + 1);
    }
  };

  const curr = Array.from({ length: nums.length });
  generate(curr, 0);

  return all;
};

export default subsets;
