/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const len = nums.length;

  const lefts = Array(len).fill(1);
  const rights = Array(len).fill(1);
  const prods = Array(len);

  for (let i = 1; i < len; i++) {
    lefts[i] = lefts[i - 1] * nums[i - 1];
  }
  prods[len - 1] = lefts[len - 1];

  for (let i = len - 2; i >= 0; i--) {
    rights[i] = rights[i + 1] * nums[i + 1];
    prods[i] = rights[i] * lefts[i];
  }

  return prods;
};

export default productExceptSelf;
