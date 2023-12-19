import { RouteObject } from 'react-router-dom';

import AccountPage, { loadCurrentStatus } from '@pages/auth/AccountPage';

const accountRoute: RouteObject = {
  path: 'account',
  element: <AccountPage />,
  loader: loadCurrentStatus,
  children: [
    {
      index: true,
    },
    {
      path: 'reset',
    },
  ],
};

export default accountRoute;
