import { describe, expect } from 'vitest';
import { screen, waitFor } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { renderWithProviders } from '@/tests/utils/test-provider';
import { getLinkCall } from '@/tests/utils/test-utils';
import Countries from '.';

describe('Countries page', () => {
  test('GIVEN the list of countries WHEN user search THEN the list is filtered', async () => {
    const { user } = renderWithProviders(<Countries />);

    const input = await screen.findByRole('searchbox');
    user.type(input, 'spain');

    await waitFor(() => {
      expect(screen.getByText('Spain')).toBeInTheDocument();
      expect(screen.queryByText('Afghanistan')).not.toBeInTheDocument();
    });
  });

  test('GIVEN the list of countries WHEN user clicks one THEN the country page is called', async () => {
    const linkCall = getLinkCall('/country/ALB');

    const history = createMemoryHistory();
    history.push = vi.fn();

    const { user } = renderWithProviders(<Countries />, { history });
    const country = await screen.findByText(/Albania/i);
    await user.click(country);

    expect(history.push).toHaveBeenCalledWith(...linkCall);
  });
});
