/**
 * 42. Trapping Rain Water
 * https://leetcode.com/problems/trapping-rain-water/
 *
 * https://www.youtube.com/watch?v=HmBbcDiJapY
 * https://www.youtube.com/watch?v=VZpJxINSvfs
 * https://www.youtube.com/watch?v=XqTBrQYYUcc
 *
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  const n = height.length;

  if (n === 0) return n;

  let water = 0;
  let lmax = -1;
  let rmax = -1;
  let i = 0;
  let j = n - 1;

  while (i < j) {
    if (height[i] > height[j]) {
      rmax = Math.max(rmax, height[j]);
      water += rmax - height[j];
      j--;
    } else {
      lmax = Math.max(lmax, height[i]);
      water += lmax - height[i];
      i++;
    }
  }

  return water;
};

/**
 * @param {number[]} height
 * @return {number}
 */
export function trap2(height) {
  const n = height.length;

  if (n === 0) return n;

  const leftMax = [height[0]];
  for (let i = 1; i < n; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], height[i]);
  }

  const rightMax = [];
  rightMax[n - 1] = height[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    rightMax[i] = Math.max(rightMax[i + 1], height[i]);
  }

  let water = 0;
  for (let i = 0; i < height.length; i++) {
    const max = Math.min(leftMax[i], rightMax[i]);
    water += max - height[i];
  }

  return water;
}

/**
 * @param {number[]} height
 * @return {number}
 */
export function trap3(height) {
  const findMaxLeft = (i) => {
    let max = -1;
    for (let j = i; j >= 0; j--) {
      if (height[j] > max) max = height[j];
    }

    return max;
  };

  const findMaxRight = (i, maxLeft) => {
    let max = -1;
    for (let j = i; j < height.length; j++) {
      if (height[j] > max) max = height[j];
      if (max > maxLeft) break;
    }

    return max;
  };

  let water = 0;
  for (let i = 0; i < height.length; i++) {
    const left = findMaxLeft(i);
    const right = findMaxRight(i, left);

    const max = Math.min(left, right);
    water += max - height[i];
  }

  return water;
}

export default trap;
