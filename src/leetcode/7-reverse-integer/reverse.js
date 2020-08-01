/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const min = 1 << 31;
  const max = ~min + 1;

  let n = Math.abs(x);
  let reversed = 0;

  do {
    const q = Math.floor(n / 10);
    const r = n % 10;
    reversed *= 10;
    reversed += r;
    n = q;
  } while (n > 0);

  reversed *= Math.sign(x);

  return reversed < min || reversed > max ? 0 : reversed;
};

export default reverse;
