import { RouteObject } from 'react-router-dom';
import SignupPage from '@pages/auth/signup/SignupPage';
import StoreInfoPage, {
  storeInfoSubmit,
} from '@pages/auth/signup/StoreInfoPage';
import { loadCurrentStatus } from '@pages/auth/account/AccountPage';
import OwnerInfoPage from '@pages/auth/signup/OwnerInfoPage';

const signupRoute: RouteObject = {
  path: 'signup',
  element: <SignupPage />,
  loader: loadCurrentStatus,
  action: storeInfoSubmit,
  children: [
    {
      index: true,
      element: <StoreInfoPage />,
    },
    {
      path: 'ownerinfo',
      element: <OwnerInfoPage />,
    },
    {
      path: 'wait',
    },
  ],
};

export default signupRoute;
