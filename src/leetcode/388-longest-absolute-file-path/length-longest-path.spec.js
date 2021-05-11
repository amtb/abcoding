import lengthLongestPath from './length-longest-path';

it('lengthLongestPath', () => {
  const cases = [
    {
      inputs: ['dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext'],
      output: 20
    },
    {
      inputs: [
        'dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext'
      ],
      output: 32
    },
    {
      inputs: ['a'],
      output: 0
    },
    {
      inputs: ['file1.txt\nfile2.txt\nlongfile.txt'],
      output: 12
    },
    {
      inputs: ['a\n\tb.txt\na2\n\tb2.txt'],
      output: 9
    },
    {
      inputs: [
        'a\n\taa\n\t\taaa\n\t\t\tfile1234567890123.txt\naaaaaaaaaaaaaaaaaaaaa\n\tsth.png'
      ],
      output: 30
    }
  ];

  cases.forEach(({ inputs, output }) =>
    expect(lengthLongestPath(...inputs)).toBe(output)
  );
});
