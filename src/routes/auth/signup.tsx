import { RouteObject } from 'react-router-dom';
import SignupPage from '@pages/auth/SignupPage';

const signupRoute: RouteObject = {
  index: true,
  element: <SignupPage />,
};

export default signupRoute;
