import licenseKeyFormatting from './license-key-formatting';

it('licenseKeyFormatting', () => {
  const cases = [
    { inputs: ['--a-a-a-a--', 2], out: 'AA-AA' },
    {
      inputs: [
        '--------EyRfCyHxyUJzhygiazYpjuDFdHvrnDwoQKQEsccLDiwhpmjueADIzqIvExbDDFnEGovAxYeszbzuTekRuWUPXRPbVKJuDQzIzzTj',
        16
      ],
      out:
        'EYRF-CYHXYUJZHYGIAZYP-JUDFDHVRNDWOQKQE-SCCLDIWHPMJUEADI-ZQIVEXBDDFNEGOVA-XYESZBZUTEKRUWUP-XRPBVKJUDQZIZZTJ'
    },
    { inputs: ['5F3Z-2e-9-w', 4], out: '5F3Z-2E9W' },

    { inputs: ['2-5g-3-J', 2], out: '2-5G-3J' }
  ];

  cases.forEach(({ inputs, out }) =>
    expect(licenseKeyFormatting(...inputs)).toBe(out)
  );
});
