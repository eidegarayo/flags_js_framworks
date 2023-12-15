import React, { PropsWithChildren } from 'react';
import { render } from '@testing-library/react';
import type { RenderOptions } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { setupListeners } from '@reduxjs/toolkit/query';
import { createMemoryHistory } from 'history';
import { ThemeProvider } from 'styled-components';

import { setupStore } from '@/store/store';
import type { AppStore, RootState } from '@/store/store';
import { theme } from '@/styles/theme.ts';

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.
interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: Partial<RootState>;
  store?: AppStore;
  history?: ReturnType<typeof createMemoryHistory>;
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    store = setupStore(preloadedState),
    history = createMemoryHistory(),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  setupListeners(store.dispatch);
  function Wrapper({ children }: PropsWithChildren<object>): JSX.Element {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Router location={history.location} navigator={history}>
            {children}
          </Router>
        </ThemeProvider>
      </Provider>
    );
  }
  return {
    store,
    user: userEvent.setup(),
    ...render(ui, { wrapper: Wrapper, ...renderOptions }),
  };
}
