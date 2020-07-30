import evalRPN from './eval-rpn';

it('evalRPN', () => {
  const cases = [
    { tokens: ['2', '1', '+', '3', '*'], result: 9 },
    { tokens: ['4', '13', '5', '/', '+'], result: 6 },
    {
      tokens: [
        '10',
        '6',
        '9',
        '3',
        '+',
        '-11',
        '*',
        '/',
        '*',
        '17',
        '+',
        '5',
        '+'
      ],
      result: 22
    }
  ];

  cases.forEach(({ tokens, result }) => expect(evalRPN(tokens)).toBe(result));
});
