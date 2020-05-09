/**
 * checks if a number is prime
 */
export function isPrime (number) {
  const sqrt = Math.sqrt(number);

  for (let i = 2; i <= sqrt; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return number > 1;
}
