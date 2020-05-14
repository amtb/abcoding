import myAtoi from './my-atoi';

it('myAtoi', () => {
  expect(myAtoi('42')).toEqual(42);
  expect(myAtoi('        -42')).toEqual(-42);
  expect(myAtoi('4193 with words')).toEqual(4193);
  expect(myAtoi('words and 987')).toBe(0);
  expect(myAtoi('-91283472332')).toBe(-2147483648);
});
