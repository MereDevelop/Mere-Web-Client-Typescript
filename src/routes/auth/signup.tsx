import { RouteObject } from 'react-router-dom';
import SignupPage from '@pages/auth/signup/SignupPage';
import StoreInfoPage, {
  storeInfoSubmit,
} from '@pages/auth/signup/StoreInfoPage';
import { loadCurrentStatus } from '@pages/auth/account/AccountPage';
import OwnerInfoPage from '@pages/auth/signup/OwnerInfoPage';
import WaitPage from '@pages/auth/signup/WaitPage';

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
      element: <WaitPage />,
    },
  ],
};

export default signupRoute;
