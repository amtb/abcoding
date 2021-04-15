import timeToType from './time-to-type';

it('timeToType', () => {
  const cases = [{ kb: 'abcdefghijklmnopqrstuvwxy', text: 'cba', ttt: 4 }];

  cases.forEach(({ kb, text, ttt }) => expect(timeToType(kb, text)).toBe(ttt));
});
