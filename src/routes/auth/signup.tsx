import { RouteObject } from 'react-router-dom';
import SignupPage from '@pages/auth/signup/SignupPage';
import OwnerInfoPage, {
  ownerInfoSubmit,
} from '@pages/auth/signup/OwnerInfoPage';
import { loadCurrentStatus } from '@pages/auth/account/AccountPage';

const signupRoute: RouteObject = {
  path: 'signup',
  element: <SignupPage />,
  loader: loadCurrentStatus,
  action: ownerInfoSubmit,
  children: [
    {
      index: true,
      element: <OwnerInfoPage />,
    },
    {
      path: 'ownerinfo',
    },
    {
      path: 'wait',
    },
  ],
};

export default signupRoute;
