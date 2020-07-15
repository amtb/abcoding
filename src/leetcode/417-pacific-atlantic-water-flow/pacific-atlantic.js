/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var pacificAtlantic = function (matrix) {
  const rows = matrix.length;
  const cols = rows ? matrix[0].length : 0;

  if (rows === 0 || cols === 0) return [];

  // init flags
  const flags = Array.from({ length: rows }).map((_, i) => {
    return Array.from({ length: cols }).map((__, j) => {
      let flag = {};
      if (i === 0 || j === 0) {
        flag = { p: true };
      }

      if (i === rows - 1 || j === cols - 1) {
        flag = { ...flag, a: true };
      }

      return flag;
    });
  });

  // top right, and bottom left corners
  flags[0][cols - 1] = { p: true, a: true };
  flags[rows - 1][0] = { p: true, a: true };

  /**
   * computes neighbors where the water can flow.
   * @param {number} i
   * @param {number} j
   * @returns {number[][]}
   */
  const getNeighbors = (i, j) => {
    const results = [];
    const height = matrix[i][j];

    if (i > 0 && matrix[i - 1][j] <= height) {
      results.push([i - 1, j]);
    }
    if (j > 0 && matrix[i][j - 1] <= height) {
      results.push([i, j - 1]);
    }

    if (i < rows - 1 && matrix[i + 1][j] <= height) {
      results.push([i + 1, j]);
    }

    if (j < cols - 1 && matrix[i][j + 1] <= height) {
      results.push([i, j + 1]);
    }

    // dry
    return results.filter(([r, c]) => !flags[r][c].visting);
  };

  const flowsTo = (i, j, ocean) => {
    const flag = flags[i][j];

    if (flag[ocean] === true) return true;

    flag.visting = true;

    const surroundings = getNeighbors(i, j);
    const flowsToOcean = surroundings.some(([r, c]) => flowsTo(r, c, ocean));

    if (flowsToOcean) flag[ocean] = true;

    flag.visting = false;
    return flowsToOcean;
  };

  const results = [];
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const toAtlantic = flowsTo(i, j, 'a');
      const toPacific = flowsTo(i, j, 'p');
      if (toAtlantic && toPacific) {
        results.push([i, j]);
      }
    }
  }

  return results;
};

export default pacificAtlantic;
