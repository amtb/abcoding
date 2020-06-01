import compareVersion from './compare-version';

describe('compareVersion', () => {
  it('should be less than x', () => {
    expect(compareVersion('0.1', '1.1')).toBe(-1);
    expect(compareVersion('7.5.2.4', '7.5.3')).toBe(-1);
  });

  it('should be equal', () => {
    expect(compareVersion('1.01', '1.001')).toBe(0);
    expect(compareVersion('1.0', '1.0.0')).toBe(0);
  });

  it('should be greater than x', () => {
    expect(compareVersion('1.0.1', '1')).toBe(1);
  });
});
