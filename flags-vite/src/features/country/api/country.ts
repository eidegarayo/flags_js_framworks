// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { FLAGS_BASE_URL } from '@/constants/api.constants';
import type { Country } from '../types/country.types';

const baseUrl = FLAGS_BASE_URL;

// Define a service using a base URL and expected endpoints
export const countryApi = createApi({
  reducerPath: 'countryApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCountries: builder.query<Country[], string>({
      query: (query) => `${baseUrl}/all?${query}`,
      transformResponse: (response: Country[]): Country[] => {
        // TODO add locale and ignorePunctuation options
        return response.sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        );
      },
    }),
    getCountry: builder.query<Country, string>({
      query: (countryId) => `${baseUrl}/alpha/${countryId}`,
      transformResponse: (response: Country[]): Country => response[0],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCountriesQuery, useGetCountryQuery } = countryApi;
