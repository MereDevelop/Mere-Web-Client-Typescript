import { RouteObject } from 'react-router-dom';

import AccountPage, {
  loadCurrentStatus,
} from '@pages/auth/account/AccountPage';
import AccountVerificationPage, {
  verificationUser,
} from '@pages/auth/account/AccountVerificationPage';
import AccountPasswordResetPage, {
  checkAuthenticatedToken,
  changePassword,
} from '@pages/auth/account/AccountPasswordResetPage';

const accountRoute: RouteObject = {
  path: 'account',
  element: <AccountPage />,
  loader: loadCurrentStatus,
  action: verificationUser,
  children: [
    {
      index: true,
      element: <AccountVerificationPage />,
    },
    {
      path: 'reset',
      element: <AccountPasswordResetPage />,
      loader: checkAuthenticatedToken,
      action: changePassword,
    },
  ],
};

export default accountRoute;
