import { describe, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { renderWithProviders } from './tests/utils/test-provider';
import { getLinkCall } from './tests/utils/test-utils';
import App from './App';

describe('App', () => {
  test('GIVEN the home page WHEN the user clicks on the countries link THEN the route `/countries` is called', async () => {
    const linkCall = getLinkCall('/countries');

    const history = createMemoryHistory();
    history.push = vi.fn();

    const { user } = renderWithProviders(<App />, { history });
    const link = screen.getByText(/Countries list/i);
    await user.click(link);

    expect(history.push).toHaveBeenCalledWith(...linkCall);
  });
});
