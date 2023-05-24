import { formatCountries } from '../redux/country/countrySlice';

describe('formatCountries', () => {
  it('should format country data correctly', () => {
    const input = {
      data: [
        {
          cca3: 'USA',
          name: 'United States',
          capital: ['Washington, D.C.'],
          population: 328200000,
        },
        {
          cca3: 'CAN',
          name: 'Canada',
          capital: 'Ottawa',
          population: 37742154,
        },
      ],
    };
    const expectedOutput = [
      {
        cca3: 'USA',
        name: 'United States',
        capital: 'Washington, D.C.',
        population: 328200000,
      },
      {
        cca3: 'CAN',
        name: 'Canada',
        capital: 'Ottawa',
        population: 37742154,
      },
    ];

    const actualOutput = formatCountries(input);

    expect(actualOutput).toEqual(expectedOutput);
  });
});
