import '@testing-library/jest-dom';
import { server } from './mocks/server';
import { countryApi } from '@/features/country/api/country';
import { setupStore } from '@/store/store';

const store = setupStore({});

// Establish API mocking before all tests.
beforeAll(() => {
  server.listen();

  // IntersectionObserver isn't available in test environment
  const mockIntersectionObserver = vi.fn();
  mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  });
  window.IntersectionObserver = mockIntersectionObserver;
});

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => {
  vi.clearAllMocks();
  server.resetHandlers();
  // This is the solution to clear RTK Query cache after each test
  store.dispatch(countryApi.util.resetApiState());
});

// Clean up after the tests are finished.
afterAll(() => server.close());
