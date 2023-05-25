import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const BackendUrl = 'https://restcountries.com/v3.1';

const initialState = {
  countries: [],
  country: [],
};

export const formatCountries = (res) => {
  if (!res || !res.data || !Array.isArray(res.data)) {
    return []; // Return an empty array or handle the error condition as appropriate
  }

  return res.data.map(({
    cca3, name, capital, population,
  }) => ({
    cca3,
    name,
    capital: Array.isArray(capital) ? capital.join(', ') : capital,
    population,
  }));
};

export const getCountries = createAsyncThunk('get/countries', async () => {
  const res = await fetch(`${BackendUrl}/all`);
  const data = await res.json();
  return formatCountries({ data });
});

const formatCountry = (res) => res.data.map(({
  cca3, name, capital, population, flags, official, unMember, currencies,
  independent, region, languages, area,
}) => ({
  cca3,
  name,
  capital: Array.isArray(capital) ? capital[0] || '' : capital || '',
  population,
  flags: Object.values(flags)[0],
  official,
  unMember,
  currencies: Object.keys(currencies)[0],
  independent,
  region: Array.isArray(region) ? region[0] || '' : region || '',
  languages: Object.values(languages)[0],
  area,
}));

export const getCountry = createAsyncThunk('get/country', async (id) => {
  const res = await fetch(`${BackendUrl}/alpha/${id}`);
  const data = await res.json();
  return formatCountry({ data });
});

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCountries.fulfilled, (state, action) => ({
      ...state,
      countries: action.payload,
    }));
    builder.addCase(getCountry.fulfilled, (state, action) => ({
      ...state,
      country: action.payload,
    }));
  },
});

export default countriesSlice.reducer;
