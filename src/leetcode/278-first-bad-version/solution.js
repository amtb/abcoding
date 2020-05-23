/**
 * O(logn)
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    const searchInRange = (from, to) => {
      const half = Math.floor((from + to) / 2);

      if (from === to || from === to - 1) {
        return isBadVersion(from) ? from : to;
      }

      if (isBadVersion(half)) {
        return searchInRange(from, half);
      } else {
        return searchInRange(half, to);
      }
    };

    return searchInRange(1, n);
  };
};

export function solve(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let from = 1;
    let to = n;

    while (from !== to && from !== to - 1) {
      const half = Math.floor((from + to) / 2);
      if (isBadVersion(half)) {
        to = half;
      } else {
        from = half;
      }
    }
    return isBadVersion(from) ? from : to;
  };
}

export default solution;
