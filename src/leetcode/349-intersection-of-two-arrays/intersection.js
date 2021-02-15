/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const unique = (array) => {
    return array.reduce((acc, value) => {
      acc[value] = 'x';
      return acc;
    }, {});
  };

  const u1 = unique(nums1);
  const u2 = unique(nums2);

  const all = { ...u1, ...u2 };

  const result = [];
  for (const num in all) {
    if (num in u1 && num in u2) {
      result.push(num);
    }
  }

  return result;
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
export function arrayIntersection(nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  const all = new Set([...nums1, ...nums2]);

  const result = [];
  for (const num of all) {
    if (set1.has(num) && set2.has(num)) {
      result.push(num);
    }
  }

  return result;
}

export default intersection;
