import { RouteObject } from 'react-router-dom';

import AccountPage, { loadCurrentStatus } from '@pages/auth/AccountPage';
import AccountVerificationPage from '@pages/auth/AccountVerificationPage';

const accountRoute: RouteObject = {
  path: 'account',
  element: <AccountPage />,
  loader: loadCurrentStatus,
  children: [
    {
      index: true,
      element: <AccountVerificationPage />,
    },
    {
      path: 'reset',
    },
  ],
};

export default accountRoute;
