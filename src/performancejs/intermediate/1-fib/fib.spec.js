import { fib } from './fib';
import { fib as naive } from '../../easy/3-fib/fib';
import { time } from '../../../utils';

it('should compute the correct fibonacci value', () => {
  expect(fib(0)).toBe(0);
  expect(fib(1)).toBe(1);
  expect(fib(10)).toBe(55);
  expect(fib(20)).toBe(6765);
  expect(fib(50)).toBe(12586269025);
});

it('should be faster', () => {
  const target = 32;
  const n = time('naive', naive, target);
  const m = time('memoized', fib, target);
  expect(n >= m).toBe(true);
});
