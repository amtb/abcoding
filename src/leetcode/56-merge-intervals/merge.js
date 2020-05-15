/**
 * Given a collection of intervals, merge all overlapping intervals.
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  if (intervals.length === 0) {
    return intervals;
  }

  /**
   * are two intervals overlapping ?
   * @param {number[]} a left
   * @param {number[]} b right
   */
  const overlaps = (a, b) => {
    return a[1] >= b[0];
  };

  /**
   * merges two intervals
   * @param {number[]} a left
   * @param {number[]} b right
   */
  const bundle = (a, b) => {
    return [a[0], Math.max(a[1], b[1])];
  };

  // have the intervals sorted
  intervals.sort((a, b) => a[0] - b[0]);

  const result = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    const previous = result[result.length - 1];
    const curr = intervals[i];

    // if two intervals overlaps, merge them and override
    if (overlaps(previous, curr)) {
      const merged = bundle(previous, curr);
      result[result.length - 1] = merged;
    } else {
      result.push(curr);
    }
  }

  return result;
};

export default merge;
