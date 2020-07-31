/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const midNum = nums[mid];

    if (midNum === target) return mid;
    // sorted ?
    if (midNum < nums[high]) {
      // is target in there ?
      if (midNum < target && target <= nums[high]) {
        low = mid + 1;
      } else {
        // search in the other (left) half
        high = mid - 1;
      }
    } else {
      if (nums[low] <= target && target < midNum) {
        high = mid - 1;
      } else {
        // search in the other (right) half
        low = mid + 1;
      }
    }
  }

  return -1;
};

export default search;
