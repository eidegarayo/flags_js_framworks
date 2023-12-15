import { createBrowserRouter } from 'react-router-dom';

import App from '@/App';
import Countries from '@/pages/Countries';
import Country from '@/pages/Country/Country';
import Error from '@/pages/Error';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/countries',
    element: <Countries />,
  },
  {
    path: '/country/:countryId',
    element: <Country />,
  },
  {
    path: '*',
    element: <Error error="404" />,
  },
]);
