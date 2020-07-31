/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  const findLeft = (low, high) => {
    if (low > high) return -1;

    const middle = Math.floor((low + high) / 2);
    if (low === high || low === high - 1) {
      return nums[low] === target
        ? low
        : nums[middle] === target
          ? middle
          : nums[high] === target
            ? high
            : -1;
    }

    if (nums[middle] >= target) {
      return findLeft(low, middle);
    } else {
      return findLeft(middle, high);
    }
  };

  const findRight = (low, high) => {
    if (low > high) return -1;

    const middle = Math.floor((low + high) / 2);
    if (low === high || low === high - 1) {
      return nums[high] === target
        ? high
        : nums[middle] === target
          ? middle
          : nums[low] === target
            ? low
            : -1;
    }

    if (nums[middle] <= target) {
      return findRight(middle, high);
    } else {
      return findRight(low, middle);
    }
  };

  const length = nums.length;
  return [findLeft(0, length - 1), findRight(0, length - 1)];
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
export function searchForRange(nums, target) {
  const findLeft = () => {
    let low = 0;
    let high = nums.length - 1;
    let result = -1;

    while (low <= high) {
      const middle = Math.floor((low + high) / 2);
      const valueAtMiddle = nums[middle];
      if (valueAtMiddle === target) {
        result = middle;
        high = middle - 1;
      } else if (valueAtMiddle > target) {
        high = middle - 1;
      } else {
        low = middle + 1;
      }
    }

    return result;
  };

  const findRight = () => {
    let low = 0;
    let high = nums.length - 1;
    let result = -1;

    while (low <= high) {
      const middle = Math.floor((low + high) / 2);
      const valueAtMiddle = nums[middle];
      if (valueAtMiddle === target) {
        result = middle;
        low = middle + 1;
      } else if (valueAtMiddle > target) {
        high = middle - 1;
      } else {
        low = middle + 1;
      }
    }

    return result;
  };

  return [findLeft(), findRight()];
}

export default searchRange;
