/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  const squares = [];
  const cache = {};

  for (let i = 1, iSquare = 1; iSquare <= n; i++, iSquare = i ** 2) {
    squares.push(iSquare);
    cache[iSquare] = 1;
  }

  const getNumberOfSquares = (number) => {
    if (number in cache) return cache[number];

    let numberOfSquares = Infinity;
    for (let i = squares.length - 1; i >= 0; i--) {
      const rest = number - squares[i];
      if (rest >= 0) {
        const numberOfSquaresRest = getNumberOfSquares(rest);
        numberOfSquares = Math.min(numberOfSquares, 1 + numberOfSquaresRest);
      }
    }

    cache[number] = numberOfSquares;
    return numberOfSquares;
  };

  return getNumberOfSquares(n);
};

export default numSquares;
