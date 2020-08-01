import countAndSay from './count-and-say';

it('countAndSay', () => {
  const cases = [
    { n: 1, r: '1' },
    { n: 2, r: '11' },
    { n: 3, r: '21' },
    { n: 4, r: '1211' },
    { n: 5, r: '111221' },
    { n: 5, r: '111221' },
    { n: 6, r: '312211' }
  ];

  cases.forEach(({ n, r }) => expect(countAndSay(n)).toBe(r));
});
