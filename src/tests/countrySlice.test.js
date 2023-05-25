/* eslint-disable max-len */
import { formatCountries } from '../redux/country/countrySlice';

describe('formatCountries', () => {
  it('should format country data correctly with mocked data fetching', async () => {
    // Mock the data fetching process
    const mockedData = [
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
    ];

    // Simulate the data fetching process by creating a promise that resolves with the mocked data
    const mockFetchData = jest.fn(() => Promise.resolve(mockedData));

    // Invoke the formatCountries function by awaiting the result of the promise returned by mockFetchData
    const actualOutput = await formatCountries({ data: await mockFetchData() });

    // Verify the output
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

    expect(actualOutput).toEqual(expectedOutput);

    // Verify that the mock fetch data function was called
    expect(mockFetchData).toHaveBeenCalled();
  });
});
