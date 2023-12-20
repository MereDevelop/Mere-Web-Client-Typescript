import { RouteObject } from 'react-router-dom';

import AccountPage, {
  loadCurrentStatus,
} from '@pages/auth/account/AccountPage';
import AccountVerificationPage from '@pages/auth/account/AccountVerificationPage';

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
