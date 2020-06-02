/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  const divides = (...dividends) => {
    return (number) => {
      for (const dividend of dividends) {
        if (number % dividend !== 0) {
          return false;
        }
      }
      return true;
    };
  };

  const divides3 = divides(3);
  const divides5 = divides(5);
  const divides3and5 = divides(3, 5);

  return Array.from({ length: n }, (_, i) => {
    const n = i + 1;

    if (divides3and5(n)) return 'FizzBuzz';
    if (divides5(n)) return 'Buzz';
    if (divides3(n)) return 'Fizz';
    return `${n}`;
  });
};

export default fizzBuzz;
