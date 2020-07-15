/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length <= 1) return nums.length;

  let slow = 0;
  let fast = 1;
  while (slow < nums.length && fast < nums.length && slow <= fast) {
    // move on until we find a different number
    while (nums[fast] === nums[slow]) {
      fast++;
    }

    slow++;

    // snip snap
    if (fast < nums.length) {
      nums[slow] = nums[fast];
    }
  }

  return (nums.length = slow);
};

export default removeDuplicates;
