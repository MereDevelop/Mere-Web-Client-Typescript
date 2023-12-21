import { RouteObject } from 'react-router-dom';

import AccountPage, {
  loadCurrentStatus,
} from '@pages/auth/account/AccountPage';
import VerificationPage, {
  verificationUser,
} from '@pages/auth/account/VerificationPage';
import PasswordReset, {
  checkAuthenticatedToken,
  changePassword,
} from '@pages/auth/account/PasswordResetPage';

const accountRoute: RouteObject = {
  path: 'account',
  element: <AccountPage />,
  loader: loadCurrentStatus,
  action: verificationUser,
  children: [
    {
      index: true,
      element: <VerificationPage />,
    },
    {
      path: 'reset',
      element: <PasswordReset />,
      loader: checkAuthenticatedToken,
      action: changePassword,
    },
  ],
};

export default accountRoute;
