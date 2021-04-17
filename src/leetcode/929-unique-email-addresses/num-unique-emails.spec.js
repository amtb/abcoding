import numUniqueEmails from './num-unique-emails';

it('numUniqueEmails', () => {
  const cases = [
    {
      inputs: [
        [
          'test.email+alex@leetcode.com',
          'test.e.mail+bob.cathy@leetcode.com',
          'testemail+david@lee.tcode.com'
        ]
      ],
      output: 2
    },
    {
      inputs: [['a@leetcode.com', 'b@leetcode.com', 'c@leetcode.com']],
      output: 3
    }
  ];

  cases.forEach(({ inputs, output }) =>
    expect(numUniqueEmails(...inputs)).toBe(output)
  );
});
