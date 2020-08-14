import generateParenthesis from './generate-parenthesis';

it('generateParenthesis', () => {
  const expected = ['((()))', '(()())', '(())()', '()(())', '()()()'];
  const generated = generateParenthesis(3);

  expect(generated.length).toBe(expected.length);
  expect(generated).toEqual(expect.arrayContaining(expected));
});
