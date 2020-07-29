/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const rows = [];

  if (numRows) {
    rows.push([1]);

    for (let i = 1; i < numRows; i++) {
      const newRow = [1];
      const previousRow = rows[i - 1];

      for (let j = 0; j < previousRow.length - 1; j++) {
        newRow.push(previousRow[j] + previousRow[j + 1]);
      }

      newRow.push(1);
      rows.push(newRow);
    }
  }
  return rows;
};
export default generate;
