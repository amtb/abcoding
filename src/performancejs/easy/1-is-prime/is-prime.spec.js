import { isPrime } from './is-prime';

describe('isPrime', () => {
  it('should be true', () => {
    expect(isPrime(2)).toBe(true);
    expect(isPrime(3)).toBe(true);
    expect(isPrime(17)).toBe(true);
  });

  it('should be false', () => {
    expect(isPrime(0)).toBe(false);
    expect(isPrime(1)).toBe(false);
    expect(isPrime(4)).toBe(false);
    expect(isPrime(10000000000000)).toBe(false);
  });
});
