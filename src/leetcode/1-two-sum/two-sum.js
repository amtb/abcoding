/**
 * brute force
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < nums.length; j++) {
//       if (i !== j && nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// };
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // build a map of number to indexes
  const map = nums.reduce((acc, num, index) => {
    if (acc[num]) {
      acc[num].push(index);
    } else {
      acc[num] = [index];
    }
    return acc;
  }, {});

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map[complement]) {
      const j = map[complement].find(e => e !== i);
      if (j) {
        return [i, j];
      }
    }
  }
};

export default twoSum;
