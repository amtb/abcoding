/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  const cp = [];
  for (let i = 0; i < m; i++) {
    cp[i] = nums1[i];
  }

  for (let i = 0, j = 0, k = 0; k < m + n; k++) {
    if (i >= m) {
      nums1[k] = nums2[j++];
    } else if (j >= n) {
      nums1[k] = cp[i++];
    } else {
      nums1[k] = cp[i] < nums2[j] ? cp[i++] : nums2[j++];
    }
  }
};
export default merge;
