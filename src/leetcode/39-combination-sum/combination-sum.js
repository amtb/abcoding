/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const results = [];

  const getTotal = (numbers) => numbers.reduce((t, v) => t + v, 0);

  /**
   * @returns {Set<number>}
   */
  const getPotentialNextValues = (previous, currentTotal) => {
    const eligibles = new Set();
    const minIndex = previous ? candidates.findIndex((v) => v === previous) : 0;

    for (let i = minIndex; i < candidates.length; i++) {
      const candidate = candidates[i];
      if (candidate + currentTotal <= target) {
        eligibles.add(candidate);
      }
    }

    return eligibles;
  };

  const generateCombinations = (combination = []) => {
    const currentTotal = getTotal(combination);
    if (currentTotal === target) {
      results.push(combination);
    } else if (currentTotal < target) {
      const length = combination.length;
      const nextCandidates = getPotentialNextValues(
        combination[length - 1],
        currentTotal
      );
      nextCandidates.forEach((nextCandidate) => {
        combination[length] = nextCandidate;
        generateCombinations([...combination]);
      });
    }
  };

  // helps out with the repetitions
  candidates.sort((a, b) => a - b).filter((v) => v > target);
  generateCombinations();

  return results;
};

export default combinationSum;
