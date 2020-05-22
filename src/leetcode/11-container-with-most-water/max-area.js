/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  /**
   * computes the area
   */
  const area = (l, r) => {
    const min = Math.min(height[l], height[r]);
    return min * (r - l);
  };

  let max = 0;
  let i = 0;
  let j = height.length - 1;
  while (i < j) {
    max = Math.max(max, area(i, j));
    if (height[i] < height[j]) {
      i++;
    } else {
      j--;
    }
  }

  return max;
};
export default maxArea;
