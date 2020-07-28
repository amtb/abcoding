/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  const notHappy = {};

  const getDigits = (number) => {
    return `${number}`.split('').map((e) => +e);
  };

  const happy = (number) => {
    if (number in notHappy) {
      return false;
    }

    const digits = getDigits(number);
    const happiness = digits.reduce((total, digit) => total + digit ** 2, 0);

    if (happiness === 1) {
      return true;
    }

    notHappy[number] = false;
    return happy(happiness);
  };

  return happy(n);
};

export default isHappy;
