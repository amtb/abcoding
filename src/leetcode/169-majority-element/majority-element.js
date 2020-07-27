/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let max = -Infinity;
  let majority;
  const counts = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num in counts) {
      counts[num] += 1;
    } else {
      counts[num] = 1;
    }

    if (counts[num] > max) {
      max = counts[num];
      majority = num;

      if (max >= nums.length / 2) {
        break;
      }
    }
  }

  return majority;
};

export default majorityElement;
