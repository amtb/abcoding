/**
 * Takes an unsorted array of unique numbers (ie. no repeats) from 1 through some number n,
 * and returns the missing number in the sequence (there are either no missing numbers, or exactly one missing number).
 */
export function missing (nums) {
  let total = 0;
  let max = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    max = Math.max(max, nums[i]);
    total += nums[i];
  }

  if (nums.length > 0) {
    const allSum = max * (max + 1) / 2;
    const missing = allSum - total;
    if (missing !== 0) {
      return missing;
    }
  }
}
