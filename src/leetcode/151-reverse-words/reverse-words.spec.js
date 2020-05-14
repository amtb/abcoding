import reverseWords from './reverse-words';

it('reverseWords', () => {
  const tests = [
    { i: 'the sky is blue', e: 'blue is sky the' },
    { i: '  hello world!  ', e: 'world! hello' },
    { i: 'a good   example', e: 'example good a' },
    { i: '  ', e: '' }
  ];
  tests.forEach((test) => expect(reverseWords(test.i)).toEqual(test.e));
});
