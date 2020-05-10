import { isBalanced } from './is-balanced';

describe('isBalanced', () => {
  it('should be true', () => {
    expect(isBalanced('()')).toBe(true);
    expect(isBalanced('()[]{}')).toBe(true);
    expect(isBalanced('{[]}')).toBe(true);
    expect(isBalanced('{}{}')).toBe(true);
    expect(isBalanced('foo { bar { baz } boo }')).toBe(true);
    expect(isBalanced('(foo { bar (baz) [boo] })')).toBe(true);
  });

  it('should be false', () => {
    expect(isBalanced('(]')).toBe(false);
    expect(isBalanced('([)]')).toBe(false);
    expect(isBalanced('}{')).toBe(false);
    expect(isBalanced('{{}')).toBe(false);
    expect(isBalanced('foo { bar { baz }')).toBe(false);
    expect(isBalanced('foo { bar } }')).toBe(false);
    expect(isBalanced('foo { bar { baz }')).toBe(false);
    expect(isBalanced('foo { (bar [baz] } )')).toBe(false);
  });
});
