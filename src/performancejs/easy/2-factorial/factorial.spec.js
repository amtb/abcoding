import { factorial } from './factorial';

describe('factorial', () => {
  it('should return the correct value', () => {
    expect(factorial(0)).toBe(1);
    expect(factorial(1)).toBe(1);
    expect(factorial(6)).toBe(720);
  });
});
