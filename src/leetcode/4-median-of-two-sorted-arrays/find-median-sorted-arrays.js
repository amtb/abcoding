/**
 * 4. Median of Two Sorted Arrays
 * https://leetcode.com/problems/median-of-two-sorted-arrays/
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const m = nums1.length;
  const n = nums2.length;

  const merged = [];
  let i = 0;
  let j = 0;
  while (i < m && j < n) {
    if (nums1[i] < nums2[j]) {
      merged.push(nums1[i++]);
    } else {
      merged.push(nums2[j++]);
    }
  }

  for (let k = i; k < m; merged.push(nums1[k++]));
  for (let k = j; k < n; merged.push(nums2[k++]));

  const length = m + n;
  const mid = Math.floor(length / 2);

  if (length % 2 === 1) return merged[mid];
  return (merged[mid - 1] + merged[mid]) / 2;
};

export default findMedianSortedArrays;
