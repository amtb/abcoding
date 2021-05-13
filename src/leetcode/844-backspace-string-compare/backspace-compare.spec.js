import backspaceCompare from './backspace-compare';

it('backspaceCompare', () => {
  const cases = [
    {
      inputs: ['ab#c', 'ad#c'],
      output: true
    },
    {
      inputs: ['ab##', 'c#d#'],
      output: true
    },
    {
      inputs: ['a##c', '#a#c'],
      output: true
    },
    { inputs: ['a#c', 'b'], output: false }
  ];

  cases.forEach(({ inputs, output }) =>
    expect(backspaceCompare(...inputs)).toBe(output)
  );
});
