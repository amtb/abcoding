/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  const target = nums.length - 1;
  const cache = {};

  const canJumpFrom = (position) => {
    if (cache[position] !== undefined) {
      return cache[position];
    }

    const jumps = nums[position];
    // can we jump directly ?
    if (jumps + position >= target) {
      return true;
    }

    // check reachable neighbors
    for (let i = jumps; i >= 1; i--) {
      const next = position + i;
      if (next >= target || canJumpFrom(next)) {
        return true;
      }
    }

    cache[position] = false;
    return cache[position];
  };

  if (nums.length === 1) {
    return true;
  }

  return canJumpFrom(0);
};

export default canJump;
