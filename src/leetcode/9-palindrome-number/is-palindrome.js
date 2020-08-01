/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x >= 0) {
    // get the digits of the number
    const digits = [];
    do {
      const q = Math.floor(x / 10);
      const r = x % 10;
      digits.push(r);
      x = q;
    } while (x > 0);

    // check if we have a palindrome
    let i = 0;
    let j = digits.length - 1;

    while (i <= j) {
      if (digits[i] !== digits[j]) return false;
      i++;
      j--;
    }

    return true;
  }
  return false;
};

export default isPalindrome;
