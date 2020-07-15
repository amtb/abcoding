/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  const length = nums.length;

  for (let i = 0; i < length; i++) {
    const num = nums[i];
    if (num !== val) {
      nums[nums.length] = num;
    }
  }

  nums.splice(0, length);
  return nums.length;
};

export default removeElement;
