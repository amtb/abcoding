/**
 * O(nlogn) / O(1)
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  nums.sort();
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) return nums[i];
  }
};

/**
 * O(n) / O(n)
 * @param {number[]} nums
 * @return {number}
 */
export function findDuplicateNumber(nums) {
  const items = new Set();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (items.has(num)) {
      return num;
    }
    items.add(num);
  }
}

export default findDuplicate;
