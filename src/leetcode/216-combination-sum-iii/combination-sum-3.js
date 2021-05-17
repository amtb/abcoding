/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  const candidates = Array.from({ length: Math.min(n, 9) }).map(
    (_, index) => index + 1
  );

  const combinations = (target = n, start = 0, size = k) => {
    if (target === 0) return [[]];
    if (target < 0) return [];

    const results = [];
    for (let i = start; i < candidates.length; i++) {
      const candidate = candidates[i];
      const remainder = target - candidate;

      const remainderWays = combinations(remainder, i + 1, size - 1);
      const solutions = remainderWays.reduce((result, way) => {
        if (way.length === size - 1) {
          result.push([candidate, ...way]);
        }
        return result;
      }, []);
      results.push(...solutions);
    }

    return results;
  };

  return combinations();
};

export default combinationSum3;
