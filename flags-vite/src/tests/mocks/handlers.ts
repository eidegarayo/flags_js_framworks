import { http, HttpResponse } from 'msw';
import { FLAGS_BASE_URL } from '@/constants/api.constants';
import { fakeCountries } from '../fake-data/countries';

export const handlers = [
  http.get(`${FLAGS_BASE_URL}/all`, () => {
    return HttpResponse.json(fakeCountries);
  }),
];
