/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  const find = (low, high) => {
    if (low === high || low === high - 1)
      return Math.min(nums[low], nums[high]);

    const half = Math.floor((low + high) / 2);
    if (nums[half] > nums[high]) {
      return find(half, high);
    } else {
      return find(low, half);
    }
  };

  return find(0, nums.length - 1);
};

export default findMin;
