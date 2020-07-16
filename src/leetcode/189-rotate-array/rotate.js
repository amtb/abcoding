/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  const length = nums.length;
  // by how many elements should we shift ?
  const delta = k > length ? k % length : k;
  const diff = length - delta;
  // pull front elts
  const front = nums.splice(0, diff);
  // add it at the end
  for (const num of front) nums[nums.length] = num;
};

export default rotate;
