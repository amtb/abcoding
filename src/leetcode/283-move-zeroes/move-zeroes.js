/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let zeroes = 0;
  const length = nums.length;

  for (let i = 0; i < length; i++) {
    const num = nums[i];
    if (num !== 0) {
      nums[nums.length] = num;
    } else {
      zeroes++;
    }
  }

  nums.splice(0, length);

  for (let i = 0; i < zeroes; i++) {
    nums[nums.length] = 0;
  }
};

export default moveZeroes;
